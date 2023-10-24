import { storeToRefs } from 'pinia';
import { useFooter } from '@/stores/footerStore';

type TElScrollArg = {
  scrollLeft: number;
  scrollTop: number;
};

export default function toggleToTopVisible(elArg: TElScrollArg): void {
  const top = elArg.scrollTop;

  const footerStore = useFooter();
  const { toTopVisible } = storeToRefs(footerStore);

  toTopVisible.value = top >= 500 ? true : false;
}
