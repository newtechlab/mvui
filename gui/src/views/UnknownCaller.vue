<template>
    <div id="container">
        <div id="fields">
            <h3>Unknown Caller</h3>
            <div class="row">
                <div class="label">ID:</div><input id="id-input" type="text" :value="id" />
            </div>
            <div class="row">
                <div class="label">Phone:</div>{{ phone }}
            </div>
            <button >Register User</button>
        </div>
    </div>
</template>

<script>

// TOTO: Hide this from github
let api = "https://stemmeid.newtechlab.wtf/api/register/";

export default {
  props: ["id", "phone"],
  methods: {
      register: function() {
          let id = document.getElementbyId("id-input").value;
          fetch(api + id, { method: "POST" });
      }
  }
}
</script>

<style scoped lang="scss">
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
    margin: 0 0 5px;
}

.label {
    float: left;
    color: #2a3a49;
}
</style>
