import { Ref } from 'vue'
import { useElementVisibility, watchOnce } from '@vueuse/core'
import anime from 'animejs'

/**
 * Animate an HTML element when it becomes visible.
 * @param {HTMLElement} htmlElement - The HTML element to animate.
 * @param {anime.AnimeParams} animationConfig - Configuration parameters for the animation.
 */
export default function enterAnimation(htmlElement: HTMLElement, animationConfig: anime.AnimeParams): void {
  // Create a reactive reference, htmlElementVisible, to track the visibility of the HTML element.
  const htmlElementVisible: Ref<boolean> = useElementVisibility(htmlElement)

  // Watch for the HTML element to become visible and execute the animation when it does.
  watchOnce(
    () => htmlElementVisible.value,
    () => {
      // Use anime.js to define and execute the animation effect for the specified HTML element.
      anime({
        targets: htmlElement, // The HTML element to animate.
        ...animationConfig, // Configuration object containing animation parameters such as duration, easing, and property changes.
      })
    },
  )
}
