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

    if (!this.base) {
      return;
    }

    this.resizeTimer;

    this.elements = {
      contact: this.base.querySelector('.contact'),
      steps: this.base.querySelectorAll('.contact-form__step'),
      stepNav: this.base.querySelector('.contact-form__step-nav'),
      nextButton: this.base.querySelector('.contact-form__step-nav .next-step-button'),
      submitButton: this.base.querySelector('.submit-button'),
      questions: this.base.querySelectorAll('.contact-form__question'),
      overview: this.base.querySelector('.contact__steps-overview'),
      overviewStepTemplate: this.base.querySelector('.steps-overview'),
      teamOverview: this.base.querySelector('.team-overview'),
      teamOverviewStart: this.base.querySelector('.team-overview-start'),
      teamOverviewEnd: this.base.querySelector('.team-overview-end'),
      mobileOverview: this.base.querySelector('.mobile-overview'),
      mobileOverviewContent: this.base.querySelector('.mobile-overview__content'),
    };

    // Steps
    const overviewStepTemplate = document.querySelector('#overview-step');

    // Submit button
    this.elements.submitButton.addEventListener('click',  this.submitForm.bind(this));

    this.elements.steps.forEach((stepElement, index) => {
      if (!stepElement.querySelector('input, textarea, select')) {
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
          delete boundElement.parentNode.dataset.disabled;
          boundElement.removeAttribute('disabled');
          boundElement.removeAttribute('tabindex');
        } else {
          boundElement.parentNode.dataset.disabled = true;
          boundElement.setAttribute('disabled', true);
        }
      });
    });

    // Navigation
    const prevButtons = this.base.querySelectorAll('.prev-step-button');
    const nextButtons = this.base.querySelectorAll('.next-step-button');

    prevButtons.forEach(button => button.addEventListener('click', this.prevStep.bind(this)));
    nextButtons.forEach(button => button.addEventListener('click', this.nextStep.bind(this)));

    // Disable all step inputs
    this.base.querySelectorAll('input, textarea, button, select, a').forEach(input => {
      input.setAttribute('tabindex', -1);
      input.setAttribute('disabled', true);

      if (input.dataset.activeIf) {
        input.parentNode.dataset.disabled = true;
      }
    });

    setTimeout(() => {
      this.updateStepHeights();
      this.nextStep();
      // Debug the form easier with the following line
      // this.goToStep(7);
    }, 1);

    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer);

      this.resizeTimer = setTimeout(() => {
        this.updateStepHeights(false, true);
      }, 500);
    });
  }

  /**
   * Update single step height in background.
   *
   * @param {HTMLElement} step
   */
  updateSingleStepHeight(step)
  {
    const prevHeight = step.style.height;

    step.style.height = 'auto';

    step.dataset.height = `${step.clientHeight}px`;

    step.style.height = prevHeight;

    void step.offsetWidth;
  }

  /**
   * Update the height of the steps in background.
   *
   * @param {boolean} onlyActiveStep Update only the current step element.
   * @param {boolean} resize Update the size of the steps.
   */
  updateStepHeights(onlyActiveStep = false, resize = false)
  {
    if (onlyActiveStep) {
      const step = this.elements.steps[this.currentStep];

      if (step.clientHeight === 0) {
        return;
      }

      this.updateSingleStepHeight(step);

      step.style.height = step.dataset.height;

      return;
    }

    this.elements.steps.forEach((step, index) => {
      step.dataset.height = `${step.clientHeight}px`;

      if (resize) {
        this.updateSingleStepHeight(step);
      }

      if (index == this.currentStep) {
        step.style.height = step.dataset.height;
      }

      if (index !== this.currentStep) {
        step.style.height = 0;
      }
    });
  }

  /**
   * Navigate to another step in the contact form and update overview.
   *
   * @param {int} stepNumber The number of the step the method should attempt to navigate to.
   * @param {boolean} skipUpdate Should the overview be updated on navigation.
   */
  goToStep(stepNumber, skipUpdate)
  {
    const currentStepEl = this.elements.steps[this.currentStep];
    const nextStepEl = this.elements.steps[stepNumber];

    if (stepNumber > 0) {
      window.location.hash = 'contact';
    }

    if (stepNumber === this.currentStep) {
      // Focus the first interactive element in this step
      const inputElement = nextStepEl.querySelectorAll('input, select')[0];
      inputElement && inputElement.focus();

      return;
    }

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

      // Disable all step inputs
      currentStepEl.querySelectorAll('input, textarea, button, select, a').forEach(input => {
        input.setAttribute('tabindex', -1);
        input.setAttribute('disabled', true);

        if (input.dataset.activeIf) {
          input.parentNode.dataset.disabled = true;
        }
      });
    }

    if (nextStepEl) {
      // Move team overview to first page or last page
      if (stepNumber === 0) {
        if (this.elements.teamOverview.parentNode !== this.elements.teamOverviewStart) {
          this.elements.teamOverviewStart.appendChild(this.elements.teamOverview);
        }
      }

      if (stepNumber === 7) {
        if (this.elements.teamOverview.parentNode !== this.elements.teamOverviewEnd) {
          this.elements.teamOverviewEnd.appendChild(this.elements.teamOverview);
        }
      }

      nextStepEl.classList.remove('is-hidden');

      this.updateSingleStepHeight(nextStepEl);
      nextStepEl.style.height = nextStepEl.dataset.height;

      // Enable all step inputs
      nextStepEl.querySelectorAll('input, textarea, button, select, a').forEach(input => {
        // Except if it has a condition
        if (input.dataset.activeIf) {
          return;
        }

        input.removeAttribute('tabindex');
        input.removeAttribute('disabled');

        // Bound elements
        if (input.dataset.bind) {
          const boundElement = this.base.querySelector(`[name="${ input.dataset.bind }"]`);

          if (input.checked) {
            if (boundElement.dataset.activeIf === input.value) {
              boundElement.removeAttribute('disabled');
              boundElement.removeAttribute('tabindex');
              boundElement.parentNode.removeAttribute('tabindex');

              delete boundElement.parentNode.dataset.disabled;

            } else {
              boundElement.parentNode.dataset.disabled = true;
              boundElement.setAttribute('disabled', true);
              boundElement.setAttribute('tabindex', -1);
            }
          }
        }
      });

      // Focus the first interactive element in this step
      const inputElement = nextStepEl.querySelectorAll('input, select')[0];
      setTimeout(() => {
        inputElement && inputElement.focus();
      }, 500);

      // Fix browser automatically scrolling the content to input element
      if (document.activeElement !== document.body) {
        nextStepEl.scrollTop = 0;
      }

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
        this.elements.stepNav.querySelectorAll('button').forEach(input => {
          input.removeAttribute('tabindex');
          input.removeAttribute('disabled');
        });

        if (this.currentStep > this.elements.steps.length - 3) {
          this.elements.stepNav.classList.add('is-hidden');
        } else {
          this.elements.stepNav.classList.remove('is-hidden');
        }
      } else {
        this.elements.stepNav.classList.add('is-hidden');

        this.elements.stepNav.querySelectorAll('button').forEach(input => {
          input.setAttribute('tabindex', -1);
          input.setAttribute('disabled', true);
        });
      }
    }
  }

  /**
   * Go to next step: increment currentStep and call goToStep().
   */
  nextStep()
  {
    this.goToStep(this.currentStep + 1);
  }

  /**
   * Go to previous step: subtract currentStep and call goToStep().
   */
  prevStep()
  {
    this.goToStep(this.currentStep - 1, true);
  }

  /**
   * Update the contact form input overview for the user.
   */
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
              } else if (answer.dataset.defaultValue) {
                answerTexts.push(answer.dataset.defaultValue);
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

    this.elements.mobileOverviewContent.innerHTML = this.elements.overview.innerHTML;

    this.elements.mobileOverviewContent.querySelectorAll('.overview-step').forEach((step, index) => {
      step.addEventListener('click', () => {
        this.goToStep(index + 1);
      });
    })
  }

  /**
   * Generate e-mail body from contact form input and team overview.
   */
  generateEmail()
  {
    const emailBody = [];
    let extraNewLine;

    // Step data
    this.elements.steps.forEach((step, stepIndex) => {
      if (stepIndex < 1 || stepIndex > 6) {
        return;
      }

      // Step title
      const title = step.querySelector('.contact-form__step-title');

      if (extraNewLine) {
        emailBody.push('\n');
        extraNewLine = false;
      }

      emailBody.push(`${title.textContent}\n`);

      // Questions and answers
      const stepContent = step.querySelectorAll('.contact-form__question, .required-group, input, select');

      stepContent.forEach(item => {
        // Question
        if (item.classList.contains('contact-form__question')) {
          emailBody.push(`   • ${item.textContent}\n`);
        }

        // Option group
        if (item.classList.contains('required-group')) {

          if (item.querySelector('input[type="checkbox"]:checked')) {
            extraNewLine = true;
          }

          if (item.querySelectorAll('input:checked').length === 0) {
            emailBody.push(`     - Not specified -\n\n`);
          }
        }

        // Single option
        if (item.nodeName === 'SELECT') {
          emailBody.push(`     ${item.value}\n\n`);

        } else if (item.nodeName === 'INPUT') {
          if (item.type === 'checkbox') {
            if (item.checked) {
              emailBody.push(`     - ${item.value}\n`);
            }
          } else if (item.type === 'radio') {
            if (item.checked) {
              if (item.dataset.bind) {
                const boundItem = step.querySelector(`[name="${item.dataset.bind}"]`);

                if (boundItem.dataset.activeIf === item.value) {
                  const boundValue = boundItem.value;
                  emailBody.push(`     ${item.value}: ${boundValue}\n\n`);
                } else {
                  emailBody.push(`     ${item.value}: ${item.dataset.defaultValue}\n\n`);
                }
              } else {
                emailBody.push(`     ${item.value}\n\n`);
              }
            }
          } else {
            if (!item.dataset.activeIf) {
              if (item.value.length > 0) {
                emailBody.push(`     ${item.value}\n\n`);
              } else {
                emailBody.push(`     - Not specified -\n\n`);
              }
            }
          }
        }
      });
    });

    // Team data
    emailBody.push('---\n\n');

    emailBody.push('Selected team:\n');

    const selectedMembers = this.elements.teamOverview.querySelectorAll('.cart-item');

    selectedMembers.forEach(memberElement => {
      const member = memberElement.member;
      emailBody.push(` • ${member.fullName} (${member.title})\n`);
    });

    if (selectedMembers.length === 0) {
      emailBody.push(` - No members selected - \n`);
    }

    return emailBody.join('');
  }

  /**
   * Submit the form with user input.
   */
  submitForm()
  {
    this.sendMail(this.generateEmail());
  }

  /**
   * Send the e-mail with XHR.
   *
   * @param {string} emailBody The main body of the e-mail.
   */
  sendMail(emailBody)
  {
    const request = new XMLHttpRequest();

    request.open('POST', '/email.php', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.responseType = 'json';

    this.elements.submitButton.setAttribute('disabled', true);

    request.send(JSON.stringify({
      emailBody: emailBody,
      clientName: this.elements.contact.querySelector('[name="clientName"]').value || '- Not specified -',
      clientEmail: this.elements.contact.querySelector('[name="clientEmail"]').value || 'hello@cursief.co'
    }));

    request.onload = () => {
      this.elements.submitButton.removeAttribute('disabled');

      if (request.status === 200) {
        const response = request.response;

        if (response.success === true) {
          this.nextStep();

          const overview = this.elements.overview;

          setTimeout(() => {
            overview.remove();
          }, 1000);

          if (window.innerWidth < 641) {
            return false
          }

          setTimeout(() => {
            overview.style.height = `${overview.clientHeight}px`;

            void overview.offsetWidth;

            overview.style.height = '353px';
          }, 500);

          return;
        }
      }

      // Should not reach this if successful
      alert('Something went wrong! Please try again.')
    };
  }
}
