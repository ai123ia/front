<template>
  <div>
    <ul class="row">
      <product
          v-for="product in products"
          :product="product"
          :authenticatedUser = "setAuthenticatedUser"
          :key="product.id"
          @deleteProduct = "deleteProduct(product)"
      />
      </ul>
  </div>
</template>

<script>

  import Product from './Product'
  import swal from 'sweetalert';

  export default {
    components: {
      Product
    },
    data() {
      return {
        products: [],
      }
    },

    methods : {
      deleteProduct(product) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this product!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {

              this.$http.delete('api/products/'.concat(product.id))
                .then(resp => {

                    let index = this.products.indexOf(product);
                    this.products.splice(index, 1);

                    swal("Poof! Your product has been deleted!", {
                      icon: "success",
                    })
                  }
                )
            } else {
              swal("Your product is safe!");
            }
          });
      }
    },

    created() {
      this.$http.get('api/products')
        .then(resp =>
          this.products = resp.data
        )
    },
    computed: {
      setAuthenticatedUser() {
        return this.$auth.getAuthenticatedUser()
      }
    }
  }
</script>

<style lang="scss">

</style>