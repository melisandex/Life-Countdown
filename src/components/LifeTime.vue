<template>
    <div class="life-time flex flex-col size-full gap-[2px] overflow-hidden">
        <YearRow v-for="year in 12" :key="year" />
    </div>
</template>
<script setup lang="ts" >
import YearRow from './YearRow.vue';
</script>