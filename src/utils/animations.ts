
export const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');

  const revealElementsOnScroll = () => {
    for (const element of revealElements) {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      const isVisible = 
        elementTop < window.innerHeight - 100 && 
        elementBottom > 0;
      
      if (isVisible) {
        element.classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealElementsOnScroll);
  window.addEventListener('load', revealElementsOnScroll);
  window.addEventListener('resize', revealElementsOnScroll);

  // Initial check
  revealElementsOnScroll();
  
  return () => {
    window.removeEventListener('scroll', revealElementsOnScroll);
    window.removeEventListener('load', revealElementsOnScroll);
    window.removeEventListener('resize', revealElementsOnScroll);
  };
};
