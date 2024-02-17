import { defineStore } from 'pinia'
import { useUsersStore } from './Users.js'
export const useUserStore = defineStore('User', {
  state: () => ({ user: '' }),

  actions: {
    setUser(userId) {
      const { users } = useUsersStore()
      this.user = users.find((user) => Number(user.id) === Number(userId))
    }
  }
})
