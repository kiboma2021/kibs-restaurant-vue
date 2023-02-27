<template>
    <h1>Ingredients</h1>
    <div v-if="ingredients.meals">
        <div v-for="ingredient in ingredients.meals" :key="ingredient.strIngredient">
        <tr>
            <td>{{ ingredient.idIngredient }}</td>
            <td>{{ ingredient.strIngredient }}</td>
            <td>{{ ingredient.strDescription }} </td>
        </tr>
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
            ingredients: [],
        }
    },
    mounted(){
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(res => res.json())
        .then(data => this.ingredients = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style>

</style>