<template>
  <div class="weather">
    <AppWeather
        v-if="!!currentWeather"
        :name="currentWeather.name"
        :temp="currentWeather.main.temp"
        :speed="currentWeather.wind.speed"
        :humidity="currentWeather.main.humidity"
        :weather="currentWeather.weather[0].main"
        :isButton="true"
    />
  </div>
</template>

<script lang="ts">
import {storeToRefs} from "pinia";
import {userStore} from "~/store/userStore";
import {onMounted} from "@vue/runtime-core";

export default {
  name: "index",
  setup() {
    const store = userStore();
    const {requestCurrentWeather} = store;
    const {currentWeather, city} = storeToRefs(store);

    onMounted(() => {if (city.value) requestCurrentWeather()});

    return {currentWeather}
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