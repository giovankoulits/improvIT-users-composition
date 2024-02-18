import { defineStore } from 'pinia'
import axios from 'axios'

const state = () => ({ users: [] })
const actions = {
  async fetchUsers(ref) {
    try {
      const fetchedUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
      const data = fetchedUsers.data
      this.users = data
      ref.value = this.users
    } catch (err) {
      console.log(err)
    }
  }
}

const getters = {
  provideUsers: (state) => state.users
}

export const useUsersStore = defineStore('Users', {
  state,
  actions,
  getters
})
