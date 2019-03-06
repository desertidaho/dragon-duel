<template>
  <div class="champion col-5 offset-1">
    <!-- <router-link :to="{name: 'DragonDetails', params:{id: carData._id}}"> -->
    <img :src="championData.imgUrl">
    <h3>{{championData.name}}</h3>
    <h3>Health: {{championData.hp}}</h3>
    <!-- </router-link> -->
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
}
</style>