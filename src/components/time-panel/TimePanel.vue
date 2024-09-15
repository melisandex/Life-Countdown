<template>
    <div class="time-pane w-1/2 h-1/3 absolute top-1/3 left-1/4 bg-white rounded-lg shadow-lg flex flex-col bg-opacity-90">
        <Clock></Clock>
        <CurrentTime></CurrentTime>
        <p @click="showDataSetting" 
            class="cursor-pointer hover:text-blue-500 p-2 w-full text-center text-gray-100 font-semibold text-base absolute -bottom-[60px] left-1/2 -translate-x-1/2">
            Discover How Much Time Is Left in Your Journey!
        </p>
        <DataSettingDialog 
            v-if="isDataSettingShow" 
            @close="updateDataSettingShow(false)"></DataSettingDialog>
    </div>
</template>
<script setup lang="ts" >
import Clock from '../clock/Clock.vue';
import CurrentTime from '../current/CurrentTime.vue';
import DataSettingDialog from '../data-setting/DataSettingDialog.vue';
import { useDataSetting } from '@/composables/use-data-setting';

const { updateDataSettingShow, isDataSettingShow } = useDataSetting();
const showDataSetting = () => {
    updateDataSettingShow(true);
}
</script>