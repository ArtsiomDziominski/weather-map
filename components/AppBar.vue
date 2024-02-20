<template>
  <div class="bar">
    <v-btn v-for="btn in buttons" :key="btn.name" :to="btn.to">
      {{ btn.name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  setup() {
    const buttons = [{name: 'Current', to: '/'},{name: 'For 3 days', to: '/weather'}];

    return {buttons}
  }
}
</script>

<style scoped lang="scss">
.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
  padding: 5px 10px;
}
</style>