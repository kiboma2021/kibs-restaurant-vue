<template>

    <h1>Food Categories</h1>
    <hr>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody v-for="category in categories.categories" :key="category.idCategory">
                <tr>
                    <td>{{ category.strCategory }}</td>
                    <td>{{ category.strCategoryDescription }}</td>
                </tr>

            </tbody>

        </table>
        

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