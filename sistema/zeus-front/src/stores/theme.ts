import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light'
  }),
  actions: {
    setTheme(value: string) {
      this.theme = value
    }
  }
})
