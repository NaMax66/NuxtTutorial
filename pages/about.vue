<template>
  <div>
    <section>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ullam!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere non nulla officiis qui quo reiciendis?</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  </div>
</template>

<script>
  export default {
    //защищаем эту страницу. Nuxt вызывает функции по очереди слева направо
    middleware: ['auth']
  };
</script>

<style scoped>

</style>
