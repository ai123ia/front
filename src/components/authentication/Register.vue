<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Please register</h1>

    <label for="inputName" class="sr-only">Name</label>
    <input
        v-model="name"
        type="text"
        id="inputName"
        class="form-control"
        placeholder="Name"
        required
        autofocus
    >

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

    <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
  </form>

</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        name: '',
      }
    }
  }
</script>

<style lang="scss">

</style>
