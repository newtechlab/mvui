<template>
  <div id="app">
    <NoCall/>
    <p>{{ title }}{{ data }}</p>
  </div>
</template>

<script>
import NoCall from '@/views/NoCall.vue'

export default {
  name: 'app',
  props: ["title", "data"],
  components: {
    NoCall,
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
  margin-top: 60px;
}
</style>
