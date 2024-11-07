<script setup>
import { useSecondaryStore } from './stores/test';

const secondaryStore = useSecondaryStore();
const {testComputed} = storeToRefs(secondaryStore)
</script>

<template>
  <div>
    {{ testComputed }}
  </div>
</template>
