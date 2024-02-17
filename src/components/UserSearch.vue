<template>
  <section class="search">
    <div class="search__search-bar">
      <input @input="provideQuery" type="text" placeholder="Search by name" />
      <img src="../assets/images/search.png" alt="search" />
    </div>
    <div class="search__user-count">
      <h2>
        {{ peopleCount }}
      </h2>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['provide-query'])
import { computed } from 'vue'

import { defineProps } from 'vue'
const props = defineProps(['filteredUsers'])
/* 
export default {
   props: ['filteredUsers'],

   methods: {
      provideQuery(e) {
         this.$emit('provide-query', e.target.value);
      },
   },

}; */
const peopleCount = computed(() => {
  if (props.filteredUsers.length > 1) {
    return `${props.filteredUsers.length} People`
  }
  if (props.filteredUsers.length === 1) {
    return `${props.filteredUsers.length} Person`
  }
  return `${props.filteredUsers.length} Results`
})
function provideQuery(e) {
  emit('provide-query', e.target.value)
}
</script>

<style scoped>
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 3.6rem;
  position: relative;
  margin-bottom: 2.2rem;
}

.search .container {
  display: flex;
  flex-direction: column-reverse;
}

.search__user-count h2 {
  margin-bottom: 2.4rem;
}

.search__search-bar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px;
}
.search__search-bar input {
  height: 48px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 1.7rem;
  padding-left: 1.2rem;
  border: 1px solid #dddddd;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: var(--dark);
}

.search__search-bar input::placeholder {
  color: #dddddd;
}

.search__search-bar input:focus::placeholder {
  color: #a8a8a8c0;
}

.search__search-bar input:focus {
  outline: none;
  border-color: #a8a8a8c0;
}

.search__search-bar img {
  position: absolute;
  right: 1.5rem;
}

.search__user-count {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}

@media (min-width: 768px) {
  .search {
    padding-top: 4.5rem;
  }

  .search .container {
    display: flex;
    flex-direction: row;
  }

  .search__search-bar {
    width: 70%;
  }
  .search__search-bar input {
    padding-left: 2rem;
  }

  .search__user-count {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .search__user-count h2 {
    margin: 0px;
  }
}
</style>
