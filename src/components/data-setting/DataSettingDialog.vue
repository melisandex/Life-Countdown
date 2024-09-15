<template>
    <div class="fixed w-1/2 h-96 rounded shadow-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col">
        <div class="header flex items-center justify-between w-full">
            <h2 class="text-2xl font-semibold text-gray-800 grow">Discover How Much Time Is Left in Your Journey</h2>
            <span class="cursor-pointer" @click="close">X</span>
        </div>
        <div class="content grow py-8 flex flex-col gap-4">
            <div>
                <label for="birth-date" class="text-gray-800">Your date of birth</label>
                <input v-model="birthTime" type="date" id="birth-date" class="w-full p-2 border border-gray-300 rounded mt-2">
            </div>
            <div>
                <label for="birth-date" class="text-gray-800">Your expected length of life</label>
                <input v-model="lifeLength" type="number" max="120" min="1" id="birth-date" class="w-full p-2 border border-gray-300 rounded mt-2">
            </div>
            <p class="text-red-500">{{ errorTip }}</p>
        </div>
        <div class="footer flex items-center justify-center">
            <button class="bg-blue-500 text-white rounded p-2 px-16" @click="saveDataSetting">Start Discover</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useTimeSetting } from '@/composables/use-time-setting';
import dayjs from 'dayjs';
import { ref } from 'vue';


const emit = defineEmits<{
    (event: 'close'): void
}>()

const close = () => {
    emit('close')
}

const birthTime = ref('')
const lifeLength = ref(80)

const errorTip = ref('')

const { setLifeTimeSetting } = useTimeSetting()
const saveDataSetting = () => {
    errorTip.value = '';
    if (!birthTime.value || !lifeLength.value || lifeLength.value < 1 || lifeLength.value > 120 || dayjs(birthTime.value).valueOf() > dayjs().valueOf()) {
        errorTip.value = 'Input is invalid, please re-enter.';
        return;
    }

    const bornDate = dayjs(birthTime.value)
    const lifeTime = bornDate.add(lifeLength.value, 'year').valueOf();
    const currentTime = dayjs().valueOf();
    const remainingTime = lifeTime - currentTime;
    if (remainingTime < 1000) {
        errorTip.value = 'Input is invalid, please re-enter.';
        return;
    }
    setLifeTimeSetting({
        bornTime: birthTime.value,
        lifeTime: lifeLength.value.toString()
    })
    close()
    window.location.reload()
}
</script>