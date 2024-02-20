import {defineStore} from "pinia";
import axios from "axios";
import {useRoute, useRuntimeConfig} from "nuxt/app";
import {Ref, ref, UnwrapRef} from "@vue/reactivity";
import {CurrentWeather, Weather} from "~/types/types";

export const userStore = defineStore('userStore', () => {
    const route = useRoute();
    const weatherKey: string = useRuntimeConfig().public.weatherKey;
    const urlWeather: string = useRuntimeConfig().public.urlWeather;
    const currentWeather: Ref<UnwrapRef<CurrentWeather | null>> = ref(null);
    const weatherList: Ref<UnwrapRef<Weather[]>> = ref([]);
    const isLoaderWeather: Ref<UnwrapRef<boolean>> = ref(false);
    const city: Ref<UnwrapRef<string>> = ref('');
    const error: Ref<UnwrapRef<string>> = ref('');

    const requestCurrentWeather = async (): Promise<void> => {
        isLoaderWeather.value = true;
        try {
            currentWeather.value = (await axios.get(`${urlWeather}/weather?units=metric&q=${city.value}&appid=${weatherKey}`)).data;
        } catch (e) {
            error.value = (e as { response: { data: { message: string, code: string } } }).response.data.message;
        }
        isLoaderWeather.value = false;
    }

    const requestWeather = async (): Promise<void> => {
        isLoaderWeather.value = true;
        try {
            weatherList.value = (await axios.get(`${urlWeather}/forecast?&cnt=3&units=metric&q=${city.value}&appid=${weatherKey}`)).data;
        } catch (e) {
            error.value = (e as { response: { data: { message: string, code: string } } }).response.data.message;
        }
        isLoaderWeather.value = false;
    }

    const setWeather = (): void => {
        route.name === 'weather' ? requestWeather() : requestCurrentWeather();
    }

    return {
        requestCurrentWeather,
        requestWeather,
        setWeather,
        currentWeather,
        isLoaderWeather,
        weatherList,
        city,
        error
    }
})
