<template>
    <div id="container">
        <div id="fields">
            <h3>Known Caller</h3>
            <div class="row">
                <div class="label">ID:</div>{{ id }}
            </div>
            <div class="row">
                <div class="label">Phone:</div>{{ phone }}
            </div>
            <div class="row">
                <div class="label">Confidence:</div>{{ confidence }}
            </div>
        </div>
        <Smiley v-bind:confidence="confidence" />
    </div>
</template>

<script>
import Smiley from '@/components/Smiley.vue'

export default {
  data: function() {
    return {
        mood: 'neutral',
    }
  },
  props: ["id", "phone", "confidence"],
  methods:{
      setMood : function(mood) {
         this.mood = mood;
      }
   },
   components: {
    Smiley
   }
}
</script>

<style scoped lang="scss">
@import '@/style/colors.scss';

#container {
    display: flex;
    align-items: center;
    color: #fff;
}

#fields {
    text-align: left;
    font-size: 1.5rem;
    flex-grow: 1;
}

h3 {
    margin: 0 0 10px 0;
}

input {
    font-size: 1.5rem;
    line-height: 2rem;
}

.label {
    float: left;
    color: #2a3a49;
}
</style>
