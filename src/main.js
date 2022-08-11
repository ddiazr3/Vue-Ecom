import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import Echo from 'laravel-echo'
window.Pusher = require('pusher-js');

dotenv.config()

let echoconfig = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_PUSHER_APP_KEY,
  wsHost: process.env.VUE_APP_HOST_PUSHER,
  wsPort: process.env.VUE_APP_PUSHER_PORT,
  wssPort: process.env.VUE_APP_PUSHER_PORT,
  forceTLS: false,
  encrypted: true,
  disableStats: true,
  enabledTransports: ['ws', 'wss'],
});
window.Echo = echoconfig


Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
