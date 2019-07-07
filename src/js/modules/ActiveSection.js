export default class ActiveSection
{
  /**
   * Constructor.
   * Checks which section is in viewport and updates its class accordingly.
   *
   * @param {string} selector Selector for which elements to check and update.
   */
  constructor(selector)
  {
    this.sections = document.querySelectorAll(selector);

    this.options = {
      threshold: .5 // When the element is at least 50% visible in viewport
    };

    // Initialize IntersectionObserver when available
    if ('IntersectionObserver' in window) {
      let sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(function(entry) {
          // Check if intersecting
          if (entry.isIntersecting) {
            const otherActiveSections = document.querySelectorAll(`${selector}.is-active`);
            otherActiveSections.forEach(activeSection => activeSection.classList.remove('is-active'));
            entry.target.classList.add('is-active');
          } else {
            entry.target.classList.remove('is-active');
          }
        });
      }, this.options);

      this.sections.forEach(section => {
        sectionObserver.observe(section);
      });
    }
  }
}
