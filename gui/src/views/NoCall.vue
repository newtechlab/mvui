<template>
  <div class="landing dark">
    <div class="textcontainer">
      <h2>
        No Calls yet
      </h2>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default class App extends Vue {
  //msg = 123

  //helloMsg = 'Hello, ' + this.propMessage
    
  // lifecycle hook
  mounted () {
    console.log("this", this)
  }
/*
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
  */
}
</script>

<style scoped lang="scss">
@import '@/style/colors.scss';

div.landing {
  background-color: $color-1;
}
</style>
