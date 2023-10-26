import { storeToRefs } from 'pinia';
import { useFooter } from '@/stores/footerStore';

type TElScrollOption = {
  scrollLeft: number;
  scrollTop: number;
};

/**
 * Switch whether to display the toTop button
 * @param {TElScrollOption} elOptions -Parameters that match the ElScrollOption type
 */
export default function toggleToTopVisible(elOptions: TElScrollOption): void {
  const top = elOptions.scrollTop;

  const footerStore = useFooter();
  const { toTop } = storeToRefs(footerStore);

  // Show the top button when scrolling over 500
  toTop.value = top >= 500 ? true : false;
}
