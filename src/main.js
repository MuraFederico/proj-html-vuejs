import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faClock as fasClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'




import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'






import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'





/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fasClock, farClock)
library.add(faPhone)
library.add(faEnvelope)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faLinkedinIn)
library.add(faAward)
library.add(faLock)
library.add(faPenToSquare)
library.add(faGraduationCap)
library.add(faNetworkWired)
library.add(faBriefcase)
library.add(faChartSimple)
library.add(faPlaneUp)
library.add(faScaleBalanced)
library.add(faInbox)
library.add(faRocket)
library.add(faGem)
library.add(faCheck)
library.add(faXmark)
library.add(faUser)






















/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
