<template>
    <h1>Food Details</h1>
    <p>Id is: {{ id}}</p>
  
</template>

<script>
export default {
    props: ['id'],

    data() {
        return {
            category: []
        }
    },
    mounted(){
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => this.category = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>