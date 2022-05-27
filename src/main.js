import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
import {faCircle} from "@fortawesome/free-regular-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon,FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faHorseHead)
library.add(faCircle)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
