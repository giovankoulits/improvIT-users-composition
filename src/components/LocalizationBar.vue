<template>
  <section class="localization">
    <div class="container">
      <h2 :class="{ active: $i18n.locale === 'EN' }" @click="$i18n.locale = 'EN'">EN</h2>
      <h2 :class="{ active: $i18n.locale === 'GR' }" @click="$i18n.locale = 'GR'">GR</h2>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  if (document.cookie.includes('locale')) {
    return
  }
  document.cookie = 'locale=EN'
})

import '../assets/styles/localization-bar.css'
</script>
