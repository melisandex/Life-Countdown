import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useTimeSetting } from "./use-time-setting";
dayjs.extend(duration)



export const useClock = () => { 
    const { getLifeTimeSetting } = useTimeSetting();

    const getRemainingTime = () => { 
        const timeSetting = getLifeTimeSetting();
        if (!timeSetting) return null;
        const bornDate = dayjs(timeSetting.bornTime)
        const lifeTime = bornDate.add(parseInt(timeSetting.lifeTime), 'year').valueOf();

        const currentTime = dayjs().valueOf();
        const remainingTime = lifeTime - currentTime;

        return remainingTime;
    }

    const getRemainingTimeData = () => { 
        const remainTimeMilliseconds = getRemainingTime();
        if (remainTimeMilliseconds &&  remainTimeMilliseconds > 0) {
            const duration = dayjs.duration(remainTimeMilliseconds);
            const years = Math.floor(duration.asYears());
            const days = Math.floor(duration.asDays()) % 365; // 取余以获取天数
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            return {
                years,
                days,
                hours,
                minutes,
                seconds,
            }
        }
    }


    return {
        getRemainingTime,
        getRemainingTimeData
    }
}