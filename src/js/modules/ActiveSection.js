export default class ActiveSection
{
  /**
   * Constructor.
   * Check which section is in viewport and updates its class accordingly.
   *
   * @param {string} selector Selector for which elements to check and update.
   */
  constructor(selector)
  {
    this.sections = document.querySelectorAll(selector);

    this.options = {
      threshold: .75 // When the element is at least 50% visible in viewport
    };

    // Initialize IntersectionObserver when available
    if ('IntersectionObserver' in window) {
      let sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(function(entry) {
          // Check if intersecting
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
            sectionObserver.unobserve(entry.target);
          }
        });
      }, this.options);

      this.sections.forEach(section => {
        sectionObserver.observe(section);
      });
    }
  }
}
