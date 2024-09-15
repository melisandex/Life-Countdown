import { ref } from 'vue'

const isDataSettingShow = ref(false)
export const useDataSetting = () => {
    const updateDataSettingShow = (value: boolean) => {
        isDataSettingShow.value = value
    }

    return {
        isDataSettingShow,
        updateDataSettingShow
    }
}