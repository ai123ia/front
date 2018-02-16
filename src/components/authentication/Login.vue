<template>
  <form
      class="form-signin"
      @submit.prevent = "login"
  >
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
    >
    <label for="inputPassword" class="sr-only">Password</label>
    <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
    >
    <div class="checkbox mb-3">
      <label>
        <input
            v-model="remember"
            type="checkbox"
            value="remember-me"
        >
        Remember me
      </label>
    </div>
    <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
    >Sign in
    </button>
  </form>

</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        remember: false,
      }
    },
    methods: {
      login() {
        let data = {
          client_id: 2,
          client_secret: 'mnOYXkRSSK2fQvHNgpFmPoP7DTYwDxJj6lyD9X11',
          grant_type: 'password',
          username: this.email,
          password: this.password
        };

        this.$http.post("oauth/token", data)
          .then(resp => {
              this.$auth.setToken(resp.body.access_token, resp.body.expires_in + Date.now());
              this.$router.push('/feed');
            }
          )
      }
    }

  }
</script>

<style lang="scss">

</style>
