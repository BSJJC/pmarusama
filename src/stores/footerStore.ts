import { defineStore } from 'pinia';

export const useFooter = defineStore('useFooter', {
  state: () => {
    return {
      atTop: true,
    };
  },

  actions: {
    backToTop(): void {
      this.atTop = true;
    },
  },
});
