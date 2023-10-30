import { storeToRefs } from 'pinia';
import { useFooter } from '@/stores/footerStore';

// Define the structure of the scroll position options for the element
type TElScrollOption = {
  scrollLeft: number; // Horizontal scroll position
  scrollTop: number; // Vertical scroll position
};

/**
 * Toggle the visibility of the 'to top' button based on scroll position.
 * @param {TElScrollOption} elOptions - Object containing scroll position properties (scrollLeft, scrollTop).
 */
export default function toggleToTopVisible(elOptions: TElScrollOption): void {
  // Extract the vertical scroll position from the provided options
  const top = elOptions.scrollTop;

  const footerStore = useFooter();

  const { atTop } = storeToRefs(footerStore);

  // Show the 'to top' button when scrolling over 500 pixels from the top
  if (top >= 500) {
    atTop.value = false; // If scrolled more than 500 pixels, the 'to top' button is visible.
  }

  // Hide the 'to top' button when scrolled back to the top of the page (at 0 pixels)
  if (top === 0) {
    atTop.value = true; // If scrolled back to the top, the 'to top' button is hidden.
  }
}
