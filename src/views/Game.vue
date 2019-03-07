<template>
  <div class="game container-fluid">
    <div class="row">
      <h1 class="col-12 mt-4 text-center mb-5">Dragons <img id="vue-logo" alt="Vue logo" src="../assets/logo.png">'s
        Champions</h1>
      <div class="row">

        <div class="col-5 offset-1">
          <img src="">
          <h5 class="text-center"></h5>
          <h5 class="text-center"></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dragon from "@/components/Dragon.vue"
  import Champion from "@/components/Champion.vue"

  export default {
    name: "game",
    mounted() {
    },
    data() {
      return {};
    },
    computed: {
      dragon() {
        return this.$store.state.activeDragon
      },
      champion() {
        return this.$store.state.activeChampion
      }
    },
    methods: {},
    components: {
    }
  };
</script>

<style scoped>
  #vue-logo {
    height: 1.5rem;
    width: auto;
  }

  img {
    width: 400px;
    height: auto;
  }
</style>