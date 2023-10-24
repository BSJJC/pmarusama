<template>
  <header id="p-header-container" class="top-[10px] right-[10px] fixed z-[9999]">
    <!-- switcher -->
    <div
      ref="switcherRef"
      :id="status ? 'open-nav' : ''"
      class="w-[50px] h-[50px] bg-[#ff5872] rounded-full relative flex justify-center items-center flex-col gap-[0.3rem] hover:cursor-pointer"
    >
      <p id="top-p" class="translate-y-[9px]"></p>
      <p id="middle-p"></p>
      <p id="bottom-p" class="translate-y-[-9px]"></p>
    </div>

    <!-- navs -->
    <Transition name="show-nav">
      <nav
        v-show="status"
        class="px-5 py-2 bg-[#ff5872] flex justify-center items-end flex-col absolute top-[55px] right-0 rounded-3xl overflow-hidden border-[3px] border-white"
      >
        <a
          v-for="(i, index) in herfs"
          :key="index"
          :href="`#p-${i.toLocaleLowerCase()}-container`"
          class="text-white text-lg font-bold my-1 hover:text-[#fff8a9]"
          style="font-family: 'M PLUS Rounded 1c', sans-serif"
        >
          {{ i }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const switcherRef: Ref<HTMLElement | undefined> = ref();
const status: Ref<boolean> = ref(false);

const herfs: Ref<string[]> = ref([
  'TOP',
  'INFORMATION',
  'PROFILE',
  'YouTube',
  'DISCOGRAPHY',
  'MMDモデル',
  'SNS',
  'CONTACT',
]);

/**
 * toggle status
 * @param event mouse click eevnt
 */
function toggleNav(event: Event): void {
  const target = event.target as HTMLElement;

  // only call toogleNav function directly when switcher itself is clicked
  // or, when clicked on the p tags which is the three lines
  if (target === switcherRef.value || target.id === 'top-p' || target.id === 'middle-p' || target.id === 'bottom-p') {
    status.value = !status.value;
    return;
  }

  // otherwise, only when stats is true, toogleNav function can be called
  if (status.value === true) {
    status.value = !status.value;
  }
}

document.addEventListener('click', toggleNav);
</script>

<style scoped>
#open-nav #top-p {
  height: 5px;
  transform: rotate(45deg);
}

#open-nav #middle-p {
  opacity: 0;
}

#open-nav #bottom-p {
  height: 5px;
  transform: rotate(-45deg);
}

p {
  position: absolute;
  width: 60%;
  height: 4px;
  border-radius: 9999px;
  background-color: white;
  transition: all 0.3s ease-out;
}

.show-nav-enter-active,
.show-nav-leave-active {
  transition: all 0.3s ease-in-out;
}

.show-nav-enter-from,
.show-nav-leave-to {
  height: 0px;
  opacity: 0;
}

.show-nav-enter-to,
.show-nav-leave-from {
  height: 304px;
}
</style>
