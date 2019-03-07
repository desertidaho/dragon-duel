<template>
  <div class="champion col-5 offset-1">
    <img :src="championData.imgUrl" @click="$emit('setTargetChampion', championData.id)">
    <h3>{{championData.name}}</h3>
    <h3>Health: {{championData.hp}}</h3>
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
</style>