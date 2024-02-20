<template>
  <div class="weather">
    <AppWeather
        v-for="weather in weatherList.list"
        :name="weatherList.city.name"
        :temp="weather.main.temp"
        :speed="weather.wind.speed"
        :humidity="weather.main.humidity"
        :weather="weather.weather[0].main"
    />
  </div>
</template>

<script lang="ts">
import {storeToRefs} from "pinia";
import {userStore} from "~/store/userStore";
import {onMounted} from "@vue/runtime-core";

export default {
  name: "weather",
  setup() {
    const store = userStore();
    const {requestWeather} = store;
    const {weatherList, city} = storeToRefs(store);

    onMounted(() => {if (city.value) requestWeather()});

    return {weatherList}
  }
}
</script>

<style scoped>
.weather {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>