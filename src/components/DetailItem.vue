<template>
  <p>
  {{ item.id }}<br/>
  {{ item.description }}<br/>
  {{ item.comment }}<br/>
  </p>
</template>

<script>
export default {
  name: "DetailItem",
  props:['id'],
  data: function () {
    return {
      item: {}
    };
  },
  mounted() {

    const baseURI = 'http://localhost:8080/items/' + this.id
    this.$http
        .get(baseURI)
        .then(response => {
          this.item = response.data
        })
        .catch(error => console.log('error occured' + error))
  }

}
</script>

<style scoped>

</style>
