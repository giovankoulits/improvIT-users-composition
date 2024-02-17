<template>
  <div class="accordion__item">
    <!--  :class="[open && selectedUser === user.id ? 'show' : null] -->
    <div class="accordion__title-box" @click="toggleOpen">
      <h3>{{ props.user.name }}</h3>
      <div class="accordion__toggle-sign" :class="[open ? 'show' : null]">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="accordion__content" :class="[open ? 'show' : null]">
      <img src="../assets/images/user.jpg" alt="user" />

      <div class="accordion__info" :class="[open ? 'show' : null]">
        <h4>{{ props.user.name }}</h4>
        <p>{{ props.user.address.street }}, {{ props.user.address.suite }}</p>
        <p>{{ props.user.address.zipcode }}, {{ props.user.address.city }}</p>
        <h3>
          <div v-if="user">
            <button class="user-btn" type="button" @click="gotToUserDetails">See more</button>
          </div>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import '../assets/styles/user-data.css'
import { ref, defineProps } from 'vue'
import router from '@/router'
const props = defineProps(['user'])
const open = ref(false)
function toggleOpen() {
  /*   this.$emit('send-open-id', this.user.id) */
  open.value = !open.value
}
function gotToUserDetails() {
  router.push({
    name: 'user-info',
    params: { id: props.user.id }
  })
}
</script>
