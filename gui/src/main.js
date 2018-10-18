import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let data = {
  title: "No Calls yet"
}


new Vue({
  render: h => {
    console.log(h, App, this)
    return h(App)
  },
  data: data,
}).$mount('#app')

window.setTimeout(() => {
  console.log("asdf")
  data.title = "ASDFASF"
}, 2000)