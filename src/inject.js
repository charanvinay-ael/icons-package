import { icons } from "./icons.js";

// Define the color class prefixes to look for
const colorClassPrefix = 'aci-no-colorize';
const staticSizeClass = 'aci-dynamic-size';

export const injectIcons = () => {
  const elements = document.querySelectorAll(".aci");
  elements.forEach(element => {
    const iconClass = Array.from(element.classList).find(cls => cls.startsWith("aci-"));
    if (iconClass && icons[iconClass]) {
      const classes = Array.from(element.classList).filter(cls => !cls.startsWith("aci")).join(" ");

      let svgWithClasses = icons[iconClass].replace('<svg', `<svg class="${classes}"`);

      const hasColorClass = Array.from(element.classList).some(cls => cls.startsWith(colorClassPrefix));
      const hasStaticSizeClass = element.classList.contains(staticSizeClass);

      if (!hasColorClass) {
        // svgWithClasses = svgWithClasses.replace(/fill="[^"]*"/g, 'fill="currentColor"');
        const skipColors = ['white'];

        svgWithClasses = svgWithClasses.replace(/fill="([^"]*)"/g, (match, fillValue) => 
          skipColors.includes(fillValue) ? match : 'fill="currentColor"'
        );
      }

      if (hasStaticSizeClass) {
        svgWithClasses = svgWithClasses.replace(/(width|height)="[^"]*"/g, '');
      }

      element.innerHTML = svgWithClasses;
    }
  });
}
