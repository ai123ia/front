<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form @submit.prevent = "update">
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input type="text"
                 class="form-control"
                 id="exampleInputName"
                 placeholder="Enter name"
                 v-model="product.name"
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPrice">Price</label>
          <input type="number"
                 class="form-control"
                 id="exampleInputPrice"
                 placeholder="Price"
                 v-model="product.price"
          >
        </div>

        <div class="form-group">
          <label for="exampleInputDescription">Description</label>
          <textarea class="form-control"
                    id="exampleInputDescription"
                    placeholder="Description"
                    v-model="product.description"
          ></textarea>
        </div>
        <button class="btn btn-primary" v-show="showButton">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

  import swal from 'sweetalert'

  export default {

    created() {
      this.getProduct();
    },

    data() {
      return {
        product: {}
      }
    },
    computed: {
      showButton() {
        return this.product.name
          && this.product.price
          && this.product.description
      }
    },
    methods: {

      getProduct() {
        this.$http.get('api/products/'.concat(this.$route.params.product))
          .then(resp => {
            this.product = resp.body
          })
      },

      update() {
        this.$http.put('api/products/'.concat(this.$route.params.product), this.product)
          .then(() =>
            swal("Updated!","Your product updated", "success")
          )
      }
    }
  }
</script>

<style lang="scss">

</style>