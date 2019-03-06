<template>
  <div class="dragon-duel">
    <img alt="Vue logo" src="../assets/logo.png">
    <dragon msg="Dragons Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Champion from '@/components/Dragon.vue'
  import Champion from '@/components/Champion.vue'


  export default {
    name: 'DragonDuel',
    components: {
      Dragon,
      Champion
    }
  }
</script>