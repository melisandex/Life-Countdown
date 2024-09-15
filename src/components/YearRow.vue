<template>
    <div class="year-row flex items-center size-full gap-[2px] overflow-hidden">
        <DayItem v-for="day in 100" :key="day" />
    </div>
</template>
<script setup lang="ts" >
import DayItem from './DayItem.vue';
</script>