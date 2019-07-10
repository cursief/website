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
      steps: this.base.querySelectorAll('.contact-form__step'),
      stepNav: this.base.querySelector('.contact-form__step-nav'),
      nextButton: this.base.querySelector('.contact-form__step-nav .next-step-button'),
      submitButton: this.base.querySelector('.contact-form__step-nav .submit-button'),
      questions: this.base.querySelectorAll('.contact-form__question')
    };

    this.elements.questions.forEach((question, index) => {
      question.textContent = `${index + 1}. ${question.textContent}`;
    });

    const prevButtons = this.base.querySelectorAll('.prev-step-button');
    const nextButtons = this.base.querySelectorAll('.next-step-button');

    prevButtons.forEach(button => button.addEventListener('click', this.prevStep.bind(this)));
    nextButtons.forEach(button => button.addEventListener('click', this.nextStep.bind(this)));

    this.elements.steps.forEach((step, index) => {
      step.dataset.height = `${step.clientHeight}px`;

      if (index !== 0) {
        step.style.height = 0;
      }
    });

    this.nextStep();

    // Inputs
    this.inputs = this.base.querySelectorAll('.contact__input');

    this.inputs.forEach(input => {
      const shadowElement = document.createElement('div');
      shadowElement.classList.add(input.classList[0], 'is-shadow');
      shadowElement.style.display = 'inline';

      input.setAttribute('placeholder', `${input.getAttribute('placeholder')}`);

      this.base.appendChild(shadowElement);

      input.shadowElement = shadowElement;

      input.boundElements = document.querySelectorAll(`[data-bound='${input.dataset.bind}']`);

      input.addEventListener('input', () => {
        this.updateField(input);
      });

      input.addEventListener('blur', this.resetField.bind(this, input));

      this.resetField(input);
    });

    // Options
    this.selectedOptions = {
      main: [],
      extra: []
    };

    this.availableOptions = this.base.querySelectorAll('.option');

    this.sentenceParts = {
      main: this.base.querySelector('.request-sentence__main'),
      extra: this.base.querySelector('.request-sentence__extra'),
    };

    this.availableOptions.forEach((option, optionIndex) => {
      option.addEventListener('click', this.selectOption.bind(this, option, optionIndex));
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

  resetField(input)
  {
    if (input.value.trim().length === 0) {
      this.updateField(input, input.getAttribute('placeholder'));
    } else {
      input.value = input.value.trim();
      this.updateField(input);
    }
  }

  selectOption(option, optionIndex)
  {
    const selectedType = this.selectedOptions[option.dataset.type];

    if (option.checked) {
      selectedType[optionIndex] = option;
    } else {
      const index = selectedType.indexOf(option);
      if (index !== -1) selectedType[index] = null
    }

    this.generateRequestSentence();
  }

  generateRequestSentence()
  {
    for (let optionType in this.selectedOptions) {
      const options = this.selectedOptions[optionType];
      const addedOptions = [];
      this.sentenceParts[optionType].innerHTML = '';

      options.forEach(option => {
        if (option === null) {
          return;
        }

        const newPart = document.createElement('span');
        addedOptions.length > 0 && this.sentenceParts[optionType].appendChild(document.createTextNode(' '));
        addedOptions.push(newPart);

        const prefixAnd = options.some(otherOption => {
          if (!option.dataset.other
              || otherOption === option
              || otherOption === null) {
            return;
          }

          const otherOptions = option.dataset.other.split(',');
          return otherOptions.indexOf(otherOption.id) !== -1;
        });

        newPart.textContent = (prefixAnd ? 'and ' : '') + option.value;

        this.sentenceParts[optionType].appendChild(newPart);
      });
    }
  }

  nextStep()
  {
    const currentStepEl = this.elements.steps[this.currentStep];
    const nextStepEl = this.elements.steps[this.currentStep + 1];

    if (currentStepEl) {
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

      this.currentStep++;

      if (this.currentStep > 0) {
        this.elements.stepNav.classList.remove('is-hidden');
      } else {
        this.elements.stepNav.classList.add('is-hidden');
      }

      if (this.currentStep == this.elements.steps.length - 1) {
        this.elements.nextButton.classList.add('is-hidden');
        this.elements.submitButton.classList.remove('is-hidden');
      }
    }
  }

  prevStep()
  {
    const currentStepEl = this.elements.steps[this.currentStep];
    const prevStepEl = this.elements.steps[this.currentStep - 1];

    if (currentStepEl) {
      currentStepEl.style.height = 0;
      currentStepEl.classList.add('is-hidden');
    }

    if (prevStepEl) {
      prevStepEl.style.height = prevStepEl.dataset.height;
      prevStepEl.classList.remove('is-hidden');

      // Focus the first interactive element in this step
      const inputElement = prevStepEl.querySelectorAll('input, select')[0];
      inputElement && inputElement.focus();

      // Fix browser automatically scrolling the content to input element
      prevStepEl.scrollTop = 0;

      this.currentStep--;

      if (this.currentStep < 1) {
        this.elements.stepNav.classList.add('is-hidden');
      } else {
        this.elements.stepNav.classList.remove('is-hidden');
      }

      if (this.currentStep < this.elements.steps.length - 1) {
        this.elements.nextButton.classList.remove('is-hidden');
        this.elements.submitButton.classList.add('is-hidden');
      }
    }
  }
}
