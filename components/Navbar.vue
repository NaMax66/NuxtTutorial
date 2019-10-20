<template>
  <div class="nav-toolbox-wrapper">

    <!--no-prefetch - не загружаем если нет сслыки-->
    <nuxt-link to="/"
               exact
               no-prefetch=""
               active-class="active"
               class="logo"
               tag="a"
               aria-disabled="true"
               :class="{'logo-hover': getCurrentRoute !== '/', 'text-white': getCurrentRoute === '/'}"
    >
      SSR
      <!--<span class="logo__short">SSR</span>
      <span class="logo__long">Nuxt SSR</span>-->
    </nuxt-link>

    <nav class="navigation">
      <ul class="navigation-list">
        <nuxt-link tag="li"
                   active-class="active"
                   :class="{'border-light': getCurrentRoute === '/', 'text-white': getCurrentRoute === '/'}"
                   to="/shop"
        >
          Shop
        </nuxt-link>

        <!--If we have some books in our cart we add a border around the button-->
        <nuxt-link tag="li"
                   active-class="active"
                   :class="{'border-light': getCurrentRoute === '/cart', 'text-white': getCurrentRoute === '/cart'}"
                   to="cart"
        >
          Cart <span class=" badge badge-light">{{ totalAmountBooksInCart }}</span>
        </nuxt-link>

        <nuxt-link tag="li"
                   active-class="active"
                   :class="{'border-light': getCurrentRoute === '/review', 'text-white': getCurrentRoute === '/review'}"
                   to="about"
        >
          About
        </nuxt-link>


        <nuxt-link active-class="active" tag="li" to="/users">Users</nuxt-link>

        <nuxt-link tag="li" to="/login" v-if="!hasToken">Login</nuxt-link>

        <!--nuxt-link не вызвает метод тега a. Пришлось сделать li-->
        <li tag="li" v-else>
          <a @click="logout" href="#">Logout</a>
        </li>




        <!--<router-link class="nav-item nav-link text-white font-weight-bold"
                     to="/login"
        >{{strings.LOGIN[language]}}</router-link>-->
      </ul>
    </nav>
  </div>
</template>

<script>

  export default {
    name: "AppHeader",

    computed: {
      hasToken() {
        return this.$store.getters.hasToken
      },

      getCurrentRoute() {
        return "some path";
      },

      totalAmountBooksInCart() {
        return "66";
      }
    },
    methods: {
      logout() {
        console.log('hello');
        this.$store.dispatch('logout');
        this.$router.push('/login')
      }
    }

  };
</script>

<style scoped lang="scss">

  $link-color: #E0E0E0;

  a {
    text-decoration: none;
    color: $link-color;
  }

  .active {
    color: #e06d63;
  }

  .nav-toolbox-wrapper {
    background-color: #333;
    color: $link-color;
    font-weight: bold;
    height: 3rem;
    position: relative;

    @media (min-width: 768px) {
      padding-right: 10%;
      padding-left: 10%;

    }
  }

  .logo {
    font-weight: normal;
    display: inline-block;
    color: $link-color;
    text-decoration: none;
    font-size: 2rem;
    padding: .5rem 0;
    line-height: 2rem;
    cursor: default;
    position: absolute;

    .logo__short {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .logo {
      font-size: 1.5rem;
      margin-left: 1rem;

      .logo__short {
        display: inline-block;
      }

      .logo__long {
        display: none;
      }
    }


  }

  .logo-hover {
    cursor: pointer;

    &:hover {
      color: #FF372F;
    }
  }

  .text-white {
    color: white;
  }

  .navigation {
    list-style: none;
    display: inline-block;
    position: absolute;
    right: 10%;
    height: inherit;
    bottom: 0;

    &-list {
      margin: 0;
      height: 100%;
    }

    /*same as nuxt-link*/
    li {

      display: inline-block;
      margin-right: 1rem;
      border: 1px solid #333;
      line-height: 2rem;
      padding: .3rem;
      border-radius: 3px;

      /*remove padding from the right element*/
      &:last-child {
        margin: 0;

      }

      &:hover {
        cursor: pointer;
        border: 1px solid white;
        padding: .3rem;
        background-color: #e06d63;
        color: #fff;
      }
    }

    .link {
      margin: 0 1rem;
      padding: 0;
      height: inherit;
      text-decoration: none;
      color: #fff;

    }

    .badge {
      margin-left: .2rem;
      background: white;
      padding: 2px;
      border-radius: 2px;
      color: #333;
    }
  }

  @media (max-width: 768px) {
    .navigation {
      right: 0;
      bottom: 0;

      li {
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        padding: 0;

        .link {
          margin: 0 .5rem;
        }

        .badge {
          margin-left: 1px;
          margin-right: 0.3rem;
        }

        &:hover {
          padding: 0;
        }
      }


    }
  }

</style>
