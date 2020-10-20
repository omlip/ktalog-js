<template>
  <div class="container">
    <table class="table table-hover">
      <caption>List of items</caption>
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Description</th>
        <th scope="col">Comment</th>
        <th scope="col">Détail</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" v-bind:key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.description }}</td>
        <td>{{ item.comment }}</td>
        <td>
          <router-link :to="{ name: 'DetailItem', params: { id: item.id }}">ici</router-link>
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListItems",
  data: function () {
    return {
      items: []
    };
  },
  mounted () {
    const baseURI = 'http://localhost:8080/items'
    this.$http
        .get(baseURI)
        .then(response => {
          this.items = response.data
        })
        .catch(error => console.log('error occured' + error))
  }
}
</script>

<style scoped>

</style>
