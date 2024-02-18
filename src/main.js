import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import GR from './locale/gr.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const i18n = createI18n({
  locale: document.cookie.split('=')[1],
  messages: {
    EN: EN,
    GR: GR
  }
})
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
