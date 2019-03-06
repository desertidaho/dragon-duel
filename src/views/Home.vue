<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <dragon msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Dragon from '@/components/Dragon.vue'

  export default {
    name: 'home',
    components: {
      Dragon
    }
  }
</script>