<template>
  <section>
    <h3 v-if="$route.query.message" style="color: red">Need to login first</h3>

    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>

      <div>
        <input type="text">

      </div>

      <button type="submit">Login</button>
      <p><nuxt-link to="/">To home page</nuxt-link>
      </p>
    </form>

  </section>
</template>

<script>
  export default {
    name: "login",
    layout: 'empty',
    methods: {
      onSubmit() {
        /*index.js  store является корневым и его не надо указывать*/
        this.$store.dispatch('login');
        this.$router.push('/');
      }
    }
  };
</script>

<style scoped>

  form {
    width: 500px;
    margin: 0 auto;
  }

  input {
    margin-top: 1rem;
    height: 2.5rem;
    font-size: 1.4rem;
    border: 1px solid #333333;
    border-radius: 3px;
  }
  button {
    margin-top: 1rem;
    background: none;
    padding: .5rem 1rem;
    border-radius: 3px;
    background-color: royalblue;
    border: none;
    color: #fff;

  }

</style>
