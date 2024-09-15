<template>
  <div class="home-view-container flex size-full relative bg-gray-50">
    <TimePanel />
    <!-- <LifeTime /> -->
  </div>
</template>
<script setup lang="ts" >
import LifeTime from '@/components/LifeTime.vue';
import TimePanel from '@/components/time-panel/TimePanel.vue';
</script>
<style>
.home-view-container{
  background-image: url('../assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: rgba(0,0,0,0.5);
}
</style>
