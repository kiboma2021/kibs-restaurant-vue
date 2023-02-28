<template>
  <nav>
    <router-link :to="{name: 'home' }">Home</router-link> |
    <router-link :to="{name: 'categories' }">Categories</router-link> |
    <router-link :to="{name: 'area' }">Area</router-link> |
    <router-link :to="{name: 'ingredients' }">Ingedient</router-link> |
  </nav>
  <button @click="redirectPage">Go Home </button>
  <button @click="goBack">Go Back</button>
  <button @click="goForward">Go Next</button>
  <router-view/>
</template>

<script>
export default{
  methods: {
    redirectPage() {
      this.$router.push({name: 'home'})
    },
    goForward(){
      this.$router.go(1)
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background: #2c3e50;
  color: white;
  font-weight: bold;
  margin: 1rem 3rem;
  padding: 1rem 2rem;
  border-radius: 10px;
}
</style>
