<template>
  <h1>Food Categories</h1>
  <div v-if="foodcategories.length">
    <div v-for="category in foodcategories" :key="category.strCategory">
        {{ category.strCategory }}
    </div>
  </div>
  <div v-else>
    <h5>Loading....</h5>
  </div>
</template>

<script>
export default {
    data() {
        return {
            foodcategories: [],
        }
    },
    mounted(){
        fetch('http://localhost:3000/meals')
        .then(res => res.json())
        .then(data => this.foodcategories = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style>

</style>