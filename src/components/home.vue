<template>
  <v-layout row>
    <v-flex>
      <v-card style="height:100%">
        <v-list style="height:100%" three-line>
          <template  v-for="(puzzle) in puzzles">
            <v-list-tile style="height:25%; width:33%; display: inline-block; margin: 10px" :key="puzzle.puzzleName" @click="gotoLock">
              <a @href="puzzle.url"></a>
              <v-list-tile-content style="align-items: center">
                <v-list-tile-title style="text-align: center" v-text="puzzle.puzzleName"></v-list-tile-title>
                <img style="height:75%; padding-top: 10px" :src="puzzle.src"/>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      puzzles: 
      [
        {puzzleName: 'puzzle1', lockName: 'lock1', url: '/lock1', src: require('../assets/lock1.png')},
        {puzzleName: 'puzzle2', lockName: 'lock2', url: '/lock2', src: require('../assets/lock2.png')},
        {puzzleName: 'puzzle3', lockName: 'lock3', url: '/lock3', src: require('../assets/lock3.jpeg')},
        {puzzleName: 'puzzle4', lockName: 'lock4', url: '/lock4', src: require('../assets/lock4.jpeg')}
      ]
    }
  },
  methods: {
    gotoLock() {
      console.log("lockName")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  color: white;
}

</style>
