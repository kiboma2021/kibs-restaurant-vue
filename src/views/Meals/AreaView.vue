<template>
    <h1>Areas</h1>

    <div v-if="areas.meals">
        <div v-for="area in areas.meals" :key="area.strArea">
            {{ area.strArea}}
        </div>        
    </div>
    <div v-else>
        <h5>Loading ...</h5>
    </div>


  
</template>

<script>
export default {
    data() {
        return {
            areas: [],
        }
    },
    mounted(){
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(res => res.json())
        .then(data => this.areas = data)
        .catch(err => console.log(err.message))
    }

}
</script>

<style>

</style>