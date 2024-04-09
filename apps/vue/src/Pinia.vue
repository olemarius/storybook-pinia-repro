<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStore } from './store'
const { counter} = storeToRefs(useStore());


</script>

<template>
    <div>
        Clicked: {{ counter }}
    </div>
    <button type="button" @click="counter++">Increase</button>
</template>