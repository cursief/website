export default class ContactForm
{
  /**
   * Constructor.
   * Setup the form and events.
   *
   * @param {string} selector Selector for the contact form base.
   */
  constructor(selector)
  {
    this.base = document.querySelector(selector);
    this.currentStep = -1;

    this.elements = {
      contact: this.base.querySelector('.contact'),
      steps: this.base.querySelectorAll('.contact-form__step'),
      stepNav: this.base.querySelector('.contact-form__step-nav'),
      nextButton: this.base.querySelector('.contact-form__step-nav .next-step-button'),
      submitButton: this.base.querySelector('.submit-button'),
      questions: this.base.querySelectorAll('.contact-form__question'),
      overview: this.base.querySelector('.contact__steps-overview'),
      overviewStepTemplate: this.base.querySelector('.steps-overview')
    };

    // Steps
    const overviewStepTemplate = document.querySelector('#overview-step');

    this.elements.steps.forEach((stepElement, index) => {
      if (index === 0) {
        return;
      }

      const overviewStepFrag = document.importNode(overviewStepTemplate.content, true);

      const stepTitle = stepElement.querySelector('.contact-form__step-title');

      if (!stepTitle) {
        return;
      }

      // We will lose the reference of the appended element when appending with the
      // fragment, so we make a copy
      const overviewStepElement = overviewStepFrag.children[0];

      overviewStepElement.elements = {
        title: overviewStepElement.querySelector('.overview-step__title'),
        content: overviewStepElement.querySelector('.overview-step__content')
      };

      overviewStepElement.addEventListener('click', (event) => {
        if (!event.target.parentNode.getAttribute('disabled')) {
          this.goToStep(index);
        }
      });

      overviewStepElement.setAttribute('disabled', true);

      overviewStepElement.elements.title.textContent = stepTitle.textContent;

      this.elements.overview.appendChild(overviewStepElement);

      stepElement.overviewStepElement = overviewStepElement;
    });

    // Bound inputs
    this.base.querySelectorAll('input[data-bind]').forEach(input => {
      input.addEventListener('change', (event) => {
        const boundElement = this.base.querySelector(`[name='${event.target.dataset.bind}']`);

        if (boundElement.dataset.activeIf === input.value) {
          boundElement.removeAttribute('disabled');
        } else {
          boundElement.setAttribute('disabled', true);
        }
      });
    });

    // Navigation
    const prevButtons = this.base.querySelectorAll('.prev-step-button');
    const nextButtons = this.base.querySelectorAll('.next-step-button');

    prevButtons.forEach(button => button.addEventListener('click', this.prevStep.bind(this)));
    nextButtons.forEach(button => button.addEventListener('click', this.nextStep.bind(this)));

    this.nextStep();

    void this.base.offsetWidth;

    setTimeout(() => {
      this.updateStepHeights();
    }, 1);
  }

  updateStepHeights(onlyActiveStep)
  {
    if (onlyActiveStep) {
      const step = this.elements.steps[this.currentStep];

      if (step.clientHeight === 0) {
        return;
      }

      const prevHeight = step.dataset.height;

      step.style.height = 'auto';

      if (prevHeight === `${step.clientHeight}px`) {
        step.style.height = prevHeight;
        return;
      }

      step.dataset.height = `${step.clientHeight}px`;
      step.style.height = prevHeight;
      void step.offsetWidth;

      step.style.height = step.dataset.height;

      return;
    }

    this.elements.steps.forEach((step, index) => {
      step.dataset.height = `${step.clientHeight}px`;

      if (index == this.currentStep) {
        step.style.height = step.dataset.height;
      }

      if (index !== this.currentStep) {
        step.style.height = 0;
      }
    });
  }

  updateField(input, newValue)
  {
    let inputValue = (input.value.trim().length > 0)
      ? input.value
      : input.shadowElement.textContent;

    input.shadowElement.textContent = newValue || inputValue;

    input.boundElements.forEach(boundElement => {
      boundElement.textContent = (newValue || inputValue).trim();
    });

    input.style.width = `${input.shadowElement.offsetWidth + 1}px`;
  }

  goToStep(stepNumber, skipUpdate)
  {
    const currentStepEl = this.elements.steps[this.currentStep];
    const nextStepEl = this.elements.steps[stepNumber];

    if (currentStepEl) {

      if (!skipUpdate) {
        this.updateOverview();

        if (currentStepEl.overviewStepElement
            && !currentStepEl.valid) {
          return;
        }
      }

      currentStepEl.style.height = 0;
      currentStepEl.classList.add('is-hidden');
    }

    if (nextStepEl) {
      nextStepEl.style.height = nextStepEl.dataset.height;
      nextStepEl.classList.remove('is-hidden');

      // Focus the first interactive element in this step
      const inputElement = nextStepEl.querySelectorAll('input, select')[0];
      inputElement && inputElement.focus();

      // Fix browser automatically scrolling the content to input element
      nextStepEl.scrollTop = 0;
      nextStepEl.parentNode.parentNode.parentNode.parentNode.scrollTop = 0;

      nextStepEl.overviewStepElement && nextStepEl.overviewStepElement.removeAttribute('disabled');

      if (currentStepEl
        && stepNumber === this.currentStep + 1
        && currentStepEl.overviewStepElement) {
        currentStepEl.overviewStepElement.classList.add('is-finished');
      }

      this.currentStep = stepNumber;

      this.elements.contact.dataset.step = stepNumber;

      if (this.currentStep > 0) {
        this.elements.stepNav.classList.remove('is-hidden');

        if (this.currentStep == this.elements.steps.length - 1) {
          this.elements.stepNav.classList.add('is-hidden');
          this.elements.submitButton.classList.remove('is-hidden');
        } else {
          this.elements.stepNav.classList.remove('is-hidden');
          this.elements.submitButton.classList.add('is-hidden');
        }
      } else {
        this.elements.stepNav.classList.add('is-hidden');
      }
    }
  }

  nextStep()
  {
    this.goToStep(this.currentStep + 1);
  }

  prevStep()
  {
    this.goToStep(this.currentStep - 1, true);
  }

  updateOverview()
  {
    const currentStepEl = this.elements.steps[this.currentStep];

    if (!currentStepEl.overviewStepElement) {
      return;
    }

    // Update overview
    const answerTexts = [];
    const validAnswers = [];
    const invalidAnswers = [];

    const stepAnswers = currentStepEl.querySelectorAll('.contact-form__option:not(.is-hidden) input, .contact-form__option:not(.is-hidden) textarea, .contact-form__option:not(.is-hidden) select');

    stepAnswers.forEach(answer => {
      // If radio or select
      if (answer.nodeName == 'INPUT') {
        if (answer.type == 'checkbox') {
          if (answer.checked) {
            answerTexts.push(answer.value);
          } else if (answer.dataset.uncheckedValue.length > 0) {
            answerTexts.push(answer.dataset.uncheckedValue);
          }
        } else if (answer.type == 'radio') {
          if (answer.checked) {
            if (!answer.dataset.bind) {
              answerTexts.push(answer.value);
            } else {
              const boundAnswer = this.base.querySelector(`[name='${answer.dataset.bind}']`);

              if (boundAnswer.value.length > 0) {
                answerTexts.push(boundAnswer.value);
              } else if (boundAnswer.getAttribute('required') !== null) {
                answerTexts.push('Not specified');
              }
            }
          }
        } else if (answer.getAttribute('disabled') === null
                   && !answer.dataset.activeIf) {
          if (answer.value.length > 0) {
            answerTexts.push(answer.value);
          } else if (answer.getAttribute('required') !== null) {
            answerTexts.push('Not specified');
          }
        }
      } else if (answer.nodeName == 'SELECT') {
        if (answer.value.length > 0) {
          answerTexts.push(answer.value);
        } else {
          answerTexts.push('Not specified');
        }
      }

      if (answer.validity && answer.validity.valid) {
        validAnswers.push(answer);
        answer.parentNode.classList.remove('is-invalid');
        answer.parentNode.classList.remove(`is-invalid--${answer.type || 'default'}`);
        answer.classList.remove('is-invalid');
      } else if (answer.getAttribute('required') !== null) {
        invalidAnswers.push(answer);
        answer.parentNode.classList.add(`is-invalid--${answer.type || 'default'}`);
        answer.parentNode.classList.add('is-invalid');
        answer.classList.add('is-invalid');
      }
    });

    const requiredGroup = currentStepEl.querySelector('.required-group');

    if (requiredGroup
        && requiredGroup.querySelectorAll('input:checked').length < 1) {
      answerTexts.push('Not specified');
    }

    if (stepAnswers.length === validAnswers.length) {
      currentStepEl.valid = true;
      currentStepEl.overviewStepElement.classList.add('is-valid');
    } else {
      invalidAnswers[0].focus();
      currentStepEl.valid = false;
      currentStepEl.overviewStepElement.classList.remove('is-valid');
      this.updateStepHeights(true);
    }

    currentStepEl.overviewStepElement.elements.content.textContent = answerTexts.join('\n');
  }
}
