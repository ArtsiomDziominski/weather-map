<template>
  <div class="weather">
    <v-progress-circular v-if="isLoaderCurrentWeather" model-value="20"></v-progress-circular>
    <CurrentWeather v-else/>
  </div>
</template>

<script lang="ts">
import CurrentWeather from "~/components/CurrentWeather.vue";
import {storeToRefs} from "pinia";
import {userStore} from "~/store/userStore";
import {onMounted} from "@vue/runtime-core";

export default {
  name: "weather",
  setup() {
    const store = userStore();
    const {requestCurrentWeather} = store;
    const {isLoaderCurrentWeather} = storeToRefs(store);

    onMounted(async () => await requestCurrentWeather());

    return {isLoaderCurrentWeather}
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