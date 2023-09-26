import { Ref } from 'vue'
import { defineStore } from 'pinia'
import { ElScrollbar } from 'element-plus'

export const useHomeStore = defineStore('home', {
    state: () => ({
        scrollbarRef: null as Ref<InstanceType<typeof ElScrollbar>> | null,
    })
})