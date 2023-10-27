import { storeToRefs } from 'pinia';
import { useFooter } from '@/stores/footerStore';

type TElScrollOption = {
  scrollLeft: number;
  scrollTop: number;
};

/**
 * Switch whether to display the atTop button
 * @param {TElScrollOption} elOptions -Parameters that match the ElScrollOption type
 */
export default function toggleToTopVisible(elOptions: TElScrollOption): void {
  const top = elOptions.scrollTop;

  const footerStore = useFooter();
  const { atTop } = storeToRefs(footerStore);

  // Show the top button when scrolling over 500
  if (top >= 500) atTop.value = false;
  if (top === 0) atTop.value = true;
}
