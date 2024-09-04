import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    isAuthenticated: false
  }),
  actions: {
    setIsAutenticated(value: boolean) {
      this.isAuthenticated = value
    }
  }
})
