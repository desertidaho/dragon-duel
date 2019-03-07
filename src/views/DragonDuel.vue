<template>
  <div class="container-fluid">
    <div class="dragon-duel row">
      <h1 class="col-12 mt-4 text-center mb-5">Dragons <img id="vue-logo" alt="Vue logo" src="../assets/logo.png">'s
        Champions</h1>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-lg shadow btn-outline-dark mb-5" @click="startGame"
            v-if="(activeDragonId != -1) && (activeChampionId != -1)">Start Game</button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="row">
            <dragon class="mb-5" v-for="dragon in dragons" v-on:setTargetDragon="setActiveDragon" :dragonData="dragon"
              :key="dragon.id"></dragon>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <champion class="mb-5" v-for="champion in champions" v-on:setTargetChampion="setActiveChampion"
              :championData="champion" :key="champion.id"></champion>
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
        activeDragonId: -1,
        activeChampionId: -1
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
      setActiveChampion(id) {
        this.activeChampionId = id
      },
      startGame() {
        this.$store.dispatch('startGame', { dragonId: this.activeDragonId, championId: this.activeChampionId })
      }
    },
    components: {
      Dragon,
      Champion
    }
  }
</script>

<style scoped>
  #vue-logo {
    height: 1.5rem;
    width: auto;
  }

  button {
    margin-left: 45vw;
  }
</style>