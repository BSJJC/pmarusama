import { useElementVisibility, watchOnce } from "@vueuse/core"
import anime from "animejs";

/**
 * html element enter animation
 * @param htmlElement the html element that needs animation
 * @param animationConfig the detail of animation
 */
export default function enterAnimation(
  htmlElement: HTMLElement,
  animationConfig: anime.AnimeParams)
  : void {
  const htmlElementVisible = useElementVisibility(htmlElement);

  watchOnce(
    () => htmlElementVisible.value,
    () => {
      anime({
        targets: htmlElement,
        ...animationConfig
      })
    }
  )
}