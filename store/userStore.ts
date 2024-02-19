import {defineStore} from "pinia";
import axios from "axios";
import {useRuntimeConfig} from "nuxt/app";
import {Ref, ref, UnwrapRef} from "@vue/reactivity";
import {CurrentWeather} from "~/types/types";

export const userStore = defineStore('userStore', () => {
    const weatherKey: string = useRuntimeConfig().public.weatherKey;
    const urlWeather: string = useRuntimeConfig().public.urlWeather;
    const currentWeather: Ref<UnwrapRef<CurrentWeather | null>> = ref(null);
    const isLoaderCurrentWeather: Ref<UnwrapRef<boolean>> = ref(true);

    const requestCurrentWeather = async (): Promise<void> => {
        isLoaderCurrentWeather.value = true;
        currentWeather.value = (await axios.get(`${urlWeather}/weather?lat=55.75&lon=37.6167&units=metric&appid=${weatherKey}`)).data;
        isLoaderCurrentWeather.value = false;
    }

    return {
        requestCurrentWeather,
        currentWeather,
        isLoaderCurrentWeather
    }
})
