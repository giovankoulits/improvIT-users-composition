<template>
  <div class="nav"></div>
  <LocalizationBar />
  <UsersData />
</template>

const { addTodo } = store;

<script setup>
import LocalizationBar from '../components/LocalizationBar.vue'
import UsersData from '@/components/UsersData.vue'
import { useUsersStore } from '@/stores/Users'
const store = useUsersStore()
const { fetchUsers } = store

import { ref, onMounted } from 'vue'
const users = ref()

onMounted(() => fetchUsers(users))
</script>
