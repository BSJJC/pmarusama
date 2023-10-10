import { Ref } from 'vue';
import { useElementVisibility, watchOnce } from '@vueuse/core';
import anime from 'animejs';

/**
 * Animate child elements of a parent HTML element when the parent element becomes visible.
 * @param {HTMLElement} parentHtmlElement - The parent HTML element containing child nodes to animate.
 * @param {string[]} targetNodeNames - The node names of the child nodes to target for animation (e.g., 'DIV', 'LI', etc.).
 * @param {anime.AnimeParams} animationConfig - Configuration parameters for the animation.
 * @param {number} [baseDelay] - The base delay before starting animations for child nodes (optional).
 * @param {number} [increaseDelay] - The increase in delay between animations for consecutive child nodes (optional).
 */
export default function overrallEnterAnimation(
  parentHtmlElement: HTMLElement,
  targetNodeNames: string[],
  animationConfig: anime.AnimeParams,
  baseDelay?: number,
  increaseDelay?: number,
): void {
  // Use useElementVisibility to monitor the visibility of the parent element
  const parentHtmlElementVisible: Ref<boolean> = useElementVisibility(parentHtmlElement);

  // Once the parent element becomes visible, execute the callback function
  watchOnce(
    () => parentHtmlElementVisible.value,
    () => {
      // Iterate through the child nodes of the parent element
      for (let i = 0; i < parentHtmlElement.childNodes.length; i++) {
        const childNode = parentHtmlElement.childNodes[i];

        // Skip if the node name of the child node does not match the target node names
        if (!targetNodeNames.includes(childNode.nodeName)) continue;

        // Use anime.js to create the animation effect
        anime({
          targets: childNode, // Target element for the animation
          delay: (baseDelay ?? 0) + (increaseDelay ?? 0) * i, // Control the animation start delay
          ...animationConfig, // Animation-specific configuration, such as duration, easing function, property changes, etc.
        });
      }
    },
  );
}
