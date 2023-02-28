<template>

    <h1>Food Categories</h1>
    <hr>
    <div v-if="categories.categories">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody v-for="category in categories.categories" :key="category.idCategory">
                <tr>
                    <router-link :to="{name: 'categoryDetails', params: {id:category.idCategory}}">
                        <td>{{ category.strCategory }}</td>
                    </router-link>
                    <td>{{ category.strCategoryDescription }}</td>
                </tr>

            </tbody>

        </table>
        
    </div>

    <div v-else>
        <h5>Loading....</h5>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    mounted(){
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => this.categories = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style>

</style>