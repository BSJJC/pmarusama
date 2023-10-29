<template>
  <div>
    <Transition mode="out-in">
      <div
        v-if="!informations"
        class="fredoka-one loading-animation w-[70%] min-h-[300px] select-none m-auto flex justify-center items-start mt-10 pt-20 text-[2rem] font-bold text-[#f70] md:text-[3rem]"
      >
        Loading...
      </div>

      <ul v-else class="mt-10">
        <li v-for="(i, index) in informations" :key="index" class="flex mb-4 min-w-[300px] w-[70%] m-auto md:mb-8">
          <!-- informations pubulish date -->
          <div
            class="fredoka-one flex justify-center items-center w-[30%] max-w-[140px] border-[#f60] border-x-[1px] text-[#f60] font-bold"
          >
            <div class="flex justify-center items-center flex-col text-[0.7rem]">
              <span class="w-full text-right leading-3 md:text-[1rem] md:leading-4">
                <!-- year -->
                {{ i.date.toString().substring(0, 4) }}
                <br />
                <!-- month -->
                {{ i.date.toString().substring(4, 6) }}
              </span>
            </div>

            <span class="text-[2rem] md:text-[2.5rem]">
              <!-- day -->
              {{ i.date.toString().substring(6, 8) }}
            </span>
          </div>

          <!-- information title -->
          <div
            class="m-plus-rounded-1c flex justify-start items-center w-[70%] border-r-[1px] border-[#f60] px-3 md:text-[1.3rem] md:w-full"
          >
            <RouterLink :to="{ path: '/information/date', query: { date: i.date } }" class="text-[#3865e0] font-black">
              {{ i.title }}
            </RouterLink>
          </div>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import { getInformation } from '@/api/information/index.ts';

type TInformation = {
  date: number;
  title: string;
};

const informations: Ref<null | TInformation[]> = ref(null);

onBeforeMount(async () => {
  const sessionStorageInformations = sessionStorage.getItem('information-list');

  if (sessionStorageInformations) {
    informations.value = JSON.parse(sessionStorageInformations);
  } else {
    getInformation().then((res) => {
      informations.value = res;

      sessionStorage.setItem('information-list', JSON.stringify(res));
    });
  }
});
</script>

<style scoped>
.loading-animation {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-20px);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
