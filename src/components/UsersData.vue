<template>
  <section class="accordion">
    <div v-if="filteredUsers" class="container">
      <user-search :filteredUsers="filteredUsers" @provide-query="setQuery" />
      <user-data v-for="user in filteredUsers" :user="user" :key="user.name" />
    </div>
  </section>
</template>

<script setup>
import UserSearch from '@/components/UserSearch.vue'
import UserData from '@/components/UserData.vue'
import { ref, computed } from 'vue'
import { useUsersStore } from '@/stores/Users'
const store = useUsersStore()

const query = ref('')

const filteredUsers = computed(() => {
  if (query.value === '') {
    return store.users
  }
  return store.users.filter((user) => user.name.toUpperCase().includes(query.value.toUpperCase()))
})

function setQuery(searchQuery) {
  query.value = searchQuery
}
</script>
