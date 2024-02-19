<template>
  <NuxtLayout>
    <main class="pages">
      <section>
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

  a {
    text-decoration: none; /* Отменяем подчеркивание у ссылки */
  }
}

main {
  min-height: 100vh;
}
</style>
