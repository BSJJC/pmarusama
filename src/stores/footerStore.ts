import { defineStore } from 'pinia';

export const useFooter = defineStore('useFooter', {
  state: () => {
    return {
      toTopVisible: false,
    };
  },
});
