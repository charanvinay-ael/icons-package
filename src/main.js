import { injectIcons } from "./inject.js";

// Run injectIcons once the page is fully loaded
window.addEventListener("load", injectIcons);

const observeDOMChanges = () => {
  const observer = new MutationObserver((mutations) => {
    let foundAciClass = false;

    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          // Check if the node is an element and contains the 'aci' class
          if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains("aci")) {
            foundAciClass = true;
          }

          // Check if any child elements of the node have the 'aci' class
          if (node.nodeType === Node.ELEMENT_NODE) {
            const aciElements = node.querySelectorAll(".aci");
            if (aciElements.length > 0) {
              foundAciClass = true;
            }
          }
        });
      }
    });

    if (foundAciClass) {
      injectIcons(); // Run injectIcons only when new elements with the 'aci' class are added
    }
  });

  // Observe changes in the entire body
  observer.observe(document.body, { childList: true, subtree: true });
};

// Start observing DOM changes
observeDOMChanges();
