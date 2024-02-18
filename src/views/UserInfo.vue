<template>
  <section id="user__details">
    <div class="container">
      <h1 @click="() => $router.go(-1)">⬅️{{ $t('back-to-users') }}</h1>
      <h2>{{ user.name }}</h2>
      <h3>📞{{ user.phone }}</h3>
      <h3>📩{{ user.website }}</h3>
      <h3>📮{{ user.email }}</h3>
      <h3>👤{{ user.username }}</h3>
    </div>
  </section>
</template>
<script setup>
import '../assets/styles/user-info.css'

import { onMounted } from 'vue'
import { useUserStore } from '@/stores/User'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const props = defineProps(['id'])
const { setUser } = store
const { user } = storeToRefs(store)
onMounted(() => setUser(props.id))
</script>
