<template>
  <div id="app">
    <NoCall v-if="state.state == 'nocaller'" />

    <KnownCaller
      v-if="state.state == 'known'"
      v-bind:id="state.id"
      v-bind:phone="state.phone"
      v-bind:confidence="state.confidence" />

    <UnknownCaller
      v-if="state.state == 'unknown'"
      v-bind:id="state.id"
      v-bind:phone="state.phone" />
  </div>
</template>

<script>
import NoCall from '@/views/NoCall.vue'
import KnownCaller from '@/views/KnownCaller.vue'
import UnknownCaller from '@/views/UnknownCaller.vue'

// TOTO: Hide this from github
let api = "https://stemmeid.newtechlab.wtf/api/state";

export default {
  name: 'app',
  components: {
    NoCall,
    KnownCaller,
    UnknownCaller
  },
  data: function() {
    return {
        state: {"state":"unknown","phone":"234234234","id":"geir geirsen","confidence":"unsure","calls":0,"robots":0},
        timer: ''
    }
  },
  created: function() {
      //this.fetchState();
      //this.timer = setInterval(this.fetchState, 1500)
  },
  methods: {
      fetchState: function() {
          fetch(api)
            .then(function(response) {
              return response.json();
            }).then(function(json) {
              console.log(json);
              this.state = json;
            }.bind(this));
      },
      cancelAutoUpdate: function() { clearInterval(this.timer) },
      noCaller: function() {
        console.log(this.state);
        return this.state == 0;
      }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
@import '@/style/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50%;
  min-width: 480px;
  margin: 75px auto 0;
}
</style>
