<template>
  <div class="container-fluid">
    <div class="dragon-duel row">
      <h1 class="col-12 mt-4 text-center mb-5">Dragons <img alt="Vue logo" src="../assets/logo.png">'s Champions</h1>
      <div class="row mt-5">
        <div class="col-6">
          <div class="row">
            <dragon class="mb-5" v-for="dragon in dragons" v-on:setTargetDragon="setActiveDragon" :dragonData="dragon"
              :key="dragon.id"></dragon>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <champion class="mb-5" v-for="champion in champions" :championData="champion" :key="champion.id"></champion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dragon from "@/components/Dragon.vue"
  import Champion from "@/components/Champion.vue"

  export default {
    name: "DragonDuel",
    mounted() {
      this.$store.dispatch("getDragons")
      this.$store.dispatch("getChampions")
    },
    data() {
      return {
        activeDragonId: -1
      }
    },
    computed: {
      dragons() {
        return this.$store.state.dragons
      },
      champions() {
        return this.$store.state.champions
      }
    },
    methods: {
      setActiveDragon(id) {
        this.activeDragonId = id
      },
      startGame() {
        this.$store.dispatch('startGame', { dragonId: this.activeDragonId })
      }
    },
    components: {
      Dragon,
      Champion
    }
  }
</script>

<style>
  img {
    height: 1.5rem;
    width: auto;
  }
</style>