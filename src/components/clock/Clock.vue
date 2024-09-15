<template>
    <div class="clock-container size-full flex text-7xl font-mono font-bold pt-8">
        <div class="year grow flex flex-col items-center justify-center gap-2">
            <span>{{ getSafeValue(remainingTimeData?.years)}}</span>
            <span class="text-xl text-gray-400">years</span>
        </div>
        <div class="days grow flex flex-col items-center justify-center gap-2">
            <span>{{ getSafeValue(remainingTimeData?.days)}}</span>
            <span class="text-xl text-gray-400">days</span>
        </div>
        <div class="hours grow flex flex-col items-center justify-center gap-2">
            <span>{{ getSafeValue(remainingTimeData?.hours)}}</span>
            <span class="text-xl text-gray-400">hours</span>
        </div>
        <div class="minute grow flex flex-col items-center justify-center gap-2">
            <span>{{getSafeValue(remainingTimeData?.minutes)}}</span>
            <span class="text-xl text-gray-400">minutes</span>
        </div>
        <div class="second grow flex flex-col items-center justify-center gap-2">
            <span>{{ getSafeValue(remainingTimeData?.seconds)}}</span>
            <span class="text-xl text-gray-400">seconds</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { RemainingTimeData } from '@/composables/types';
import { useClock } from '@/composables/use-clock';
import { useDataSetting } from '@/composables/use-data-setting';
import { ref } from 'vue';

const { getRemainingTimeData } = useClock();
const { updateDataSettingShow } = useDataSetting();

const remainingTimeData = ref<RemainingTimeData | undefined>(undefined)

const refreshTime = () => {
    remainingTimeData.value = getRemainingTimeData();
    if (!remainingTimeData.value) {
        updateDataSettingShow(true);
        return;
    }
    setTimeout(() => {
        refreshTime();
    }, 1000);
}

refreshTime();
function isNumber(value:number|undefined): value is number {
    return typeof value === 'number' && !isNaN(value);
}

const getSafeValue = (value: number | undefined) => {
    if(isNumber(value)) {
        return value;
    } else {
        return '--';
    }
}

</script>
<style>
</style>