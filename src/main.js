import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';
import commit from '../commit';

console.log(commit);
new Vue({
  render: h => h(App),
}).$mount('#app')
