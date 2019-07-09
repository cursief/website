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

   this.elements.header.dataset.isSticky = 'false';
   this.elements.header.stickyFrom = this.elements.header.getBoundingClientRect()['top'];
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
  }
}
