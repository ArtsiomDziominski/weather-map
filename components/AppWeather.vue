<template>
  <v-card
      class="mx-auto card pa-8"
      max-width="700"
  >
    <v-card-item :title="name"/>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters="">
        <v-col
            class="text-h2 card__temp"
            cols="6"
        >
          {{ tempValue }}
        </v-col>

        <v-col cols="6" class="text-right">
          <v-icon
              color="black"
              :icon="IconWeather[weather]"
              size="88"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" class="d-flex flex-row">
        <v-icon icon="mdi-weather-windy" />
        <v-list-item-title>{{ speed }} m/h</v-list-item-title>
      </v-list-item>

      <v-list-item density="compact">
        <v-icon icon="mdi-water-percent" />
        <v-list-item-title>{{ humidity }}</v-list-item-title>
      </v-list-item>
    </div>

    <v-divider></v-divider>

    <v-card-actions v-if="isButton">
      <v-btn to="/weather">
        {{ 'Weather for 3 days' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {computed} from "@vue/reactivity";
import {IconWeather} from "../const/const";

export default {
  name: "AppWeather",
  props: {
    name: {
      type: String,
      default: ''
    },
    temp: {
      type: Number,
      default: ''
    },
    speed: {
      type: Number,
      default: ''
    },
    humidity: {
      type: Number,
      default: ''
    },
    weather: {
      type: String,
      default: ''
    },
    isButton: {
      type: Boolean,
      default: false
    }
  },
  setup(props: any) {

    const tempValue = computed((): number | string => {
      return props.temp ? Math.round(props.temp) : 'Not found';
    })

    return {
      tempValue,
      IconWeather
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