<template>
  <div class="col-md-4">
    <div class="card"
         style="width: 18rem;"
    >
      <img class="card-img-top"
           src="https://cdn-images-1.medium.com/fit/c/200/200/1*rrk0qqmHWx-jbaoC5MZlHA.png"
           alt="">
      <div class="card-body">
        <p>{{ product.user_id }}</p>
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text">{{ product.price }}</p>
        <hr>
        <p>
          <a href="" class="btn btn-primary">Wish list</a>
          <a href="" class="btn btn-success">Buy</a>
        </p>
        <hr>
        <p v-if="userProduct">
          <a
              href=""
              class="btn btn-danger"
              @click.prevent = "$emit('deleteProduct')"
          >
            Delete
          </a>

          <router-link
            :to="`products/${product.id}/edit`"
          >
            Edit
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['product', 'authenticatedUser'],
    data() {
      return {}
    },
    computed: {
      userProduct() {
        return this.product.user_id === this.authenticatedUser.id
      }
    },
    methods: {

    }
  }
</script>
