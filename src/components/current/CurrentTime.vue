<template>
    <div class="current-time-container p-2 flex items-center justify-center">
        <p class="text-gray-400 w-40 flex gap-2">
            <span>{{ nowDate }}</span>
            <span>{{ nowTime }}</span>
        </p>
    </div>
</template>
<script setup lang="ts" >
import { ref } from 'vue';
import dayjs from 'dayjs';

const nowDate = ref(dayjs().format('YYYY-MM-DD'));
const nowTime = ref(dayjs().format('HH:mm:ss'));

const timer = () => {
    setTimeout(() => {
        nowDate.value = dayjs().format('YYYY-MM-DD');
        nowTime.value = dayjs().format('HH:mm:ss');
        timer();
    }, 1000);
}
timer()
</script>