import { defineStore } from 'pinia'
import { useUsersStore } from './Users.js'

const state = () => ({ user: '' })
const actions = {
  setUser(userId) {
    const users = useUsersStore()
    this.user = users.users.find((user) => user.id == userId)
    return true
  }
}

export const useUserStore = defineStore('User', {
  state,
  actions
})
