import { skipHydrate } from "pinia";

export const useTestStore = defineStore('testStore', () => {
    const testComputed = computed(() => {
        return "abc";
    })

    return {
        testComputed
    }
})

export const useSecondaryStore = defineStore('secondaryStore', () => {
    const testStore = useTestStore();
    const {testComputed} = storeToRefs(testStore)

    // const test = toRef(reactive({
    //     'alttest': computed(() => '')
    // }), 'alttest');

    return {
        testComputed, 
        // testComputed: test, 
    }
})