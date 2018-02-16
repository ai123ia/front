<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form @submit.prevent = "create">

        <div class="form-group">
          <label for="exampleInputFile">File</label>
          <input
              type="file"
              class="form-control"
              id="exampleInputFile"
              @change="imageChanged"
          >
        </div>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input
                 name="name"
                 type="text"
                 class="form-control"
                 id="exampleInputName"
                 placeholder="Enter name"
                 v-model="product.name"
                 v-validate="'required'"
          >
          <div class="alert alert-danger"
              v-show="errors.has('name')"
          >
            {{ errors.first('name') }}
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPrice">Price</label>
          <input name="price"
                 type="number"
                 class="form-control"
                 id="exampleInputPrice"
                 placeholder="Price"
                 v-validate="'max_value:50|min_value:1'"
                 v-model="product.price"
          >
          <div class="alert alert-danger"
               v-show="errors.has('price')"
          >
            {{ errors.first('price') }}
          </div>
        </div>

        <div class="form-group">
          <label for="exampleInputDescription">Description</label>
          <textarea class="form-control"
                    id="exampleInputDescription"
                    placeholder="Description"
                    v-model="product.description"
          ></textarea>
        </div>
        <input type="submit" value="Create" class="btn btn-primary">
      </form>
    </div>
  </div>
</template>

<script>

  import ru from "vee-validate/dist/locale/ru"

  export default {
    data() {
      return {
        product: {
          name: '',
          price: 0,
          description: '',
          image: ''
        }
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

      imageChanged(e) {
        let fileReader = new FileReader();

        fileReader.readAsDataURL(e.target.files[0]);

        fileReader.onload = (e) => {
          this.product.image = e.target.result
        }
      },

      create() {

        const dictionary = {
          'ru': {
            attributes: {
              name: 'имя'
            }
          }
        };

        this.$validator.localize('ru', dictionary.ru);

        this.$validator.validateAll()
          .then(resp => {
            if (resp)
              this.$http.post('api/products', this.product)
                .then(() =>
                  this.$router.push('/feed')
                )
          })
      }
    }
  }
</script>

<style lang="scss">

</style>