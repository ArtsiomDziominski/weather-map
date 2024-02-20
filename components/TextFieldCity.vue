<template>
  <v-responsive
      class="mx-auto"
      max-width="544"
  >
    <v-text-field
        v-model.trim="city"
        prepend-icon="mdi-map-marker"
        :append-icon="'mdi-send'"
        label="City"
        variant="outlined"
        :loading="isLoaderWeather"
        :error-messages="error"
        @click:append="setWeather"
        @keydown.enter="setWeather"
        @input="error = ''"
    />
  </v-responsive>
</template>

<script lang="ts">
import {storeToRefs} from "pinia";
import {userStore} from "../store/userStore";

export default {
  name: "TextFieldCity",
  setup() {
    const store = userStore();
    const {setWeather} = store;
    const {city, isLoaderWeather, error} = storeToRefs(store);

    return { city, isLoaderWeather, error, setWeather }
  }
}
</script>

<style scoped lang="scss">
.mx-auto {}
</style>