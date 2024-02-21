<template>
  <NuxtLayout>
    <AppBar/>
    <main class="pages">
      <section>
        <TextFieldCity></TextFieldCity>
        <NuxtPage></NuxtPage>
      </section>
    </main>
  </NuxtLayout>
</template>
<script lang="ts">
</script>

<style lang="scss">

.pages {
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;

  a {
    text-decoration: none;
  }
}

main {
  min-height: calc(100vh - 46px);
}
</style>
