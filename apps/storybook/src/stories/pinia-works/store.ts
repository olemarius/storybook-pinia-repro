import { ref } from 'vue';
import { defineStore } from 'pinia';
export const useStore = defineStore('context', () => {
    const counter = ref<number>(0);
    return {
        counter
    };
});
