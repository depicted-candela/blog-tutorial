window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
      tags: 'ams',  // Use AMSmath environments
      tagSide: 'right', // Place equation tags (labels) on the right
      tagIndent: '.8em' // Indentation for tags
    },
    svg: {
      fontCache: 'global',
      scale: 1, // Adjust the scaling factor if needed
      minScale: .5,  // Minimum scale for small equations
      mtextInheritFont: false, // Use MathJax fonts for multiline text
      merrorInheritFont: true, // Inherit font for error messages
      mathmlSpacing: false, // Control spacing in MathML output
      useFontCache: true,  // Cache font data
      internalSpeechTitles: true  // Generate speech titles for screen readers 
    },
    options: {
      enableMenu: true,    // Enable the MathJax context menu
      menuOptions: {
        settings: {
          zoom: 'Click' // Use click-based zooming
        }
      }
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });