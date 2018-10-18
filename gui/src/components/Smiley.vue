<template>
  <div id="smiley" :class="confidence">
        <div class="eyes">
            <div class="eye left"></div>
            <div class="eye right"></div>
        </div>
        <div class="mouth"></div>
    </div>
</template>

<script>
export default {
    props: ["confidence"]
}
</script>

<style scoped>
  #smiley {
      width: 100px;
      height: 100px;
      padding: 25px;
      background-color: #e4c932;
      border-radius: 100%;
      box-shadow: 2px 2px 12px #999;
      position: relative;
      transition: all 0.5s;
  }

  .eyes {
      width: 100%;
      height: 15%;
      top: 25%;
      padding: 0 30px;
      box-sizing: border-box;
      margin-left: -25px;
      position: absolute;
  }

  .eyes .eye {
      height: 100%;
      width: 23px;
      float: left;
      position: relative;
      border-radius: 100%;
      background-color: #fff;
  }

  .eye.right {
      float: right;
  }

  #smiley .mouth {
      width: 60%;
      height: 12%;
      bottom: 20%;
      left: 50%;
      border-radius: 100px;
      margin-left: -30%;
      position: absolute;
      background-color: #fff;
      transition: all 0.5s;
  }

  #smiley.positive {
      background-color: #007272;
  }

  #smiley.negative {
      background-color: #f4425c;
  }

  #smiley.positive .mouth {
      bottom: 14%;
      height: 26%;
      border-radius: 0 0 200px 200px;
  }

  #smiley.negative .mouth {
      border-radius: 200px 200px 0 0;
  }
</style>