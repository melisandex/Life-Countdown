const LOCAL_STORAGE_KEY = 'timeSetting';

export type TimeSetting = {
    bornTime: string;
    lifeTime: string;
}

export const useTimeSetting = () => { 
    const getLifeTimeSetting = () => { 
        const lifeTime = localStorage.getItem(LOCAL_STORAGE_KEY);
        return lifeTime ? JSON.parse(lifeTime) : null;
    }

    const setLifeTimeSetting = ( timeSetting: TimeSetting) => { 
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(timeSetting));
    }
    return {
        getLifeTimeSetting,
        setLifeTimeSetting
    }
};