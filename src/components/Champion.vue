<template>
  <div class="champion col-5 offset-1">
    <img :src="championData.imgUrl" @click="$emit('setTargetChampion', championData.id)">
    <h5 class="name">{{championData.name}}</h5>
    <h5 class="ml-5">Health: {{championData.hp}}</h5>
  </div>
</template>

<script>
  export default {
    name: "champion",
    props: ["championData"],
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
    width: 200px;
    cursor: pointer;
  }

  .name {
    margin-left: 4.3vw;
  }
</style>