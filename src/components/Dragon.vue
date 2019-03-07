<template>
  <div class="dragons col-5 offset-1">
    <img :src="dragonData.imgUrl" @click="$emit('setTargetDragon', dragonData.id)">
    <h5 class="text-center">{{dragonData.name}}</h5>
    <h5 class="text-center">Health: {{dragonData.currentHP}}</h5>
  </div>
</template>

<script>
  export default {
    name: "dragon",
    props: ["dragonData"],
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>
  img {
    height: auto;
    width: 250px;
    cursor: pointer;
  }
</style>