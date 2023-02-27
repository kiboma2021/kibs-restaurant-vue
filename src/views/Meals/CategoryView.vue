<template>
  <h1>Food Categories</h1>
  <div v-if="foodcategories.meals">
    <div v-for="category in foodcategories.meals" :key="category.strCategory">
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
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(res => res.json())
        .then(data => this.foodcategories = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style>

</style>