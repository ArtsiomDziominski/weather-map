<template>
  <v-card
      v-if="currentWeather"
      class="mx-auto card"
      max-width="400"
  >
    <v-card-item :title="currentWeather?.name"/>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters="">
        <v-col
            class="text-h2 card__temp"
            cols="6"
        >
          {{ temp }}
        </v-col>

        <v-col cols="6" class="text-right">
          <v-icon
              color="black"
              icon="mdi-weather-cloudy"
              size="88"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item v-if="currentWeather?.wind?.speed" density="compact" class="d-flex flex-row">
        <v-icon icon="mdi-weather-windy" />
        <v-list-item-title>{{ currentWeather?.wind.speed }} m/h</v-list-item-title>
      </v-list-item>

      <v-list-item density="compact">
        <v-icon icon="mdi-water-percent" />
        <v-list-item-title>{{ currentWeather?.main.humidity }}</v-list-item-title>
      </v-list-item>
    </div>
  </v-card>
</template>

<script lang="ts">
import {userStore} from "~/store/userStore";
import {storeToRefs} from "pinia";
import {computed} from "@vue/reactivity";

export default {
  name: "CurrentWeather",
  setup() {
    const store = userStore();
    const {currentWeather} = storeToRefs(store);

    const temp = computed((): number | string => {
      return currentWeather.value?.main?.temp ? Math.round(currentWeather.value.main.temp) : 'Not found';
    })

    return {
      currentWeather,
      temp
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  &__temp {
    white-space: nowrap;
  }
}
</style>