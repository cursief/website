export default class ScrollHandler
{
 /**
  * Constructor.
  * Setup the main scroll event handler.
  */
 constructor()
 {
   this.debounceTimeOut = 50;
   this.throttleTimeOut = 50;
   this.pastMoment = Date.now();

   this.timer = 0;
   window.addEventListener('scroll', this.throttleScroll.bind(this));

   // Elements
   this.elements = {
     header: document.querySelector('.header--primary')
   };

   // Sections
   this.sections = document.querySelectorAll('main section');

   this.elements.header.dataset.isSticky = 'false';
   this.elements.header.stickyFrom = this.elements.header.getBoundingClientRect()['top'];

   // Run the throttler once at page load.
   this.throttleScroll();
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
    for (let sectionIndex = this.sections.length - 1; sectionIndex > -1; sectionIndex--) {
      const section = this.sections[sectionIndex];

      if (section.offsetTop - scrollY < window.innerHeight * .5) {
        section.classList.add('is-active');
        break;
      }
    }
  }
}
