<template>
  <div class="dragons col-5 offset-1">
    <img :src="dragonData.imgUrl" @click="$emit('setTargetDragon', dragonData.id)">
    <h3>{{dragonData.name}}</h3>
    <h3>Health: {{dragonData.currentHP}}</h3>
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