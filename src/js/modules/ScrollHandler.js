export default class ScrollHandler
{
 /**
  * Constructor.
  * Setup the main scroll event handler.
  */
 constructor(selectors)
 {
   this.activeThreshold = .75; // Percentage of a contactSection that should be scrolled past to activate
   this.debounceTimeOut = 100;
   this.throttleTimeOut = 100;
   this.pastMoment = Date.now();

   this.timer = 0;
   window.addEventListener('scroll', this.throttleScroll.bind(this));

   // Elements
   this.elements = {
     header: document.querySelector(selectors.header),
     sections: document.querySelectorAll(selectors.sections)
   };

   this.elements.header.dataset.isSticky = 'false';
   this.elements.header.stickyFrom = this.elements.header.getBoundingClientRect()['top'];

   this.cart = selectors.cart;

   // Run the callback once at page load.
   this.handleScroll();
 }

  /**
   * Helper function to throttle the amount of times the scroll handler is
   * called.
   */
  throttleScroll()
  {
    const currentMoment = Date.now();

    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(this.handleScroll.bind(this), this.debounceTimeOut);

    if (currentMoment < this.pastMoment + this.throttleTimeOut) {
      return;
    }

    this.pastMoment = currentMoment;
    this.handleScroll();
  }

  /**
   * Handle all the expected behaviour when scrolling.
   */
  handleScroll()
  {
    const scrollY = window.scrollY;
    const windowHalfHeight = window.innerHeight * .5;

    // Header
    if (scrollY > this.elements.header.stickyFrom) {
      if (this.elements.header.dataset.isSticky === 'false') {
        this.elements.header.dataset.isSticky = 'true';
      }
    } else {
      if (this.elements.header.dataset.isSticky === 'true') {
        this.elements.header.dataset.isSticky = 'false';
      }
    }

    // Sections
    for (let sectionIndex = this.elements.sections.length - 1; sectionIndex > -1; sectionIndex--) {
      const section = this.elements.sections[sectionIndex];

      // Section is already active, continue to next section
      if (section.isActive) {
        continue;
      }

      if (scrollY + window.innerHeight > section.offsetTop + section.clientHeight * (1 - this.activeThreshold)
          && scrollY < section.offsetTop + section.clientHeight * this.activeThreshold) {
        section.classList.add('is-active');
        section.isActive = true;
      }
    }

    // Cart
    const contactSection = this.elements.sections[2];

    if (!this.cart.activated
        && scrollY + windowHalfHeight > contactSection.offsetTop
        && scrollY + windowHalfHeight < contactSection.offsetTop + contactSection.clientHeight
        && !this.cart.base.classList.contains('is-expanded')) {
      this.cart.activated = true;
      this.cart.handleClick();
    }
  }
}
