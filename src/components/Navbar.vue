<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
              to="/login"
              class="nav-link"
              v-if="!isAuth"
          >
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
              to="/register"
              class="nav-link"
              v-if="!isAuth"
          >
            Register
          </router-link>
        </li>
        <li>
          <router-link
              to="/feed"
              class="nav-link"
              v-if="isAuth"
          >
            Feed
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
              to="/products/create"
              class="nav-link"
              v-if="isAuth"
          >
            Create
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
              to="/logout"
              class="nav-link"
              v-if="isAuth"
          >
            Logout
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        isAuth: null
      }
    },

    created() {
      this.isAuth = this.$auth.isAuthenticated();

      this.setAuthenticatedUser()
    },

    methods: {
      setAuthenticatedUser() {
        this.$http.get('api/user')
          .then(resp => {
            this.$auth.setAuthenticatedUser(resp.body);
            console.log(this.$auth.getAuthenticatedUser());
          })
      }
    }
  }
</script>

<style lang="scss">

</style>
