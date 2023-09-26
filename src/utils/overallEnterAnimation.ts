import { Ref } from "vue"
import { useElementVisibility, watchOnce } from "@vueuse/core"
import anime from "animejs";

/**
 * Execute an enter animation for HTML elements.
 * @param parentHtmlElement The parent HTML element containing the child elements to animate.
 * @param targetNodeName The HTML node name (tag name) of the child elements to animate.
 * @param animationConfig The animation configuration object containing various properties and parameters for the animation, controlled by anime.js.
 * @param baseDelay (Optional) The base delay time for controlling the animation start delay.
 * @param increaseDelay (Optional) The incremental delay time used to add delay to each child element being animated.
 */
export default function overrallEnterAnimation(
    parentHtmlElement: HTMLElement,
    targetNodeName: string,
    animationConfig: anime.AnimeParams,
    baseDelay?: number,
    increaseDelay?: number)
    : void {
    // Use useElementVisibility to monitor the visibility of the parent element
    const parentHtmlElementVisible: Ref<boolean> = useElementVisibility(parentHtmlElement)

    // Once the parent element becomes visible, execute the callback function
    watchOnce(
        () => parentHtmlElementVisible.value,
        () => {
            // Iterate through the child nodes of the parent element
            for (let i = 0; i < parentHtmlElement.childNodes.length; i++) {
                const childNode = parentHtmlElement.childNodes[i];

                // Skip if the node name of the child node does not match the target node name
                if (childNode.nodeName !== targetNodeName) continue;

                // Use anime.js to create the animation effect
                anime({
                    targets: childNode, // Target element for the animation
                    delay: (baseDelay ?? 0) + (increaseDelay ?? 0) * i, // Control the animation start delay
                    ...animationConfig // Animation-specific configuration, such as duration, easing function, property changes, etc.
                })
            }
        }
    )
}