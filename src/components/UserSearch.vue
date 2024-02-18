<template>
  <section class="search">
    <div class="search__search-bar">
      <input @input="provideQuery" type="text" :placeholder="$t('search')" />
      <img src="../assets/images/search.png" alt="search" />
    </div>
    <div class="search__user-count">
      <h2>
        {{ `${filteredUsers.length} ${$tc('search-results', peopleCount)}` }}
      </h2>
    </div>
  </section>
</template>

<script setup>
import '../assets/styles/search-bar.css'
const emit = defineEmits(['provide-query'])
import { computed } from 'vue'

const props = defineProps(['filteredUsers'])

function provideQuery(e) {
  emit('provide-query', e.target.value)
}

const peopleCount = computed(() => {
  if (props.filteredUsers.length > 1) {
    return 0
  }
  if (props.filteredUsers.length === 1) {
    return 1
  } else return 2
})
</script>
