<template>
  <form id="add-form" v-on:submit.prevent="submitForm">

    <div class="form-group">
      <label for="description">Description</label>
      <input id="description" class="form-control" name="description" type="text" v-model="form.description">
    </div>

    <div class="form-group">
      <label for="comment">Comment</label>
      <input id="comment" class="form-control" name="comment" type="text" v-model="form.comment"/>
    </div>

    <div class="form-group">
      <label for="context">Context</label>
      <input id="context" class="form-control" name="context" type="text" v-model="form.context"/>
    </div>

    <div class="form-group">
      <button class="btn btn-primary">Ajouter</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddItem",
  data(){
    return{
      form: {
        description: '',
        comment: '',
        context: ''
      }
    }
  },
  methods:{
    submitForm(){
      const baseURI = 'http://localhost:8080/items'
      this.$http.post(baseURI, this.form)
          .then((res) => {
            //Perform Success Action
            console.log(res)
          })
          .catch((error) => {
            // error.response.status Check status code
            console.log(error.response.status)
          }).finally(() => {
        //Perform action in always
      });
    }
  }

}
</script>

<style scoped>

</style>
