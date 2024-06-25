import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    login(data) {
      const { access_token, user } = data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      this.isLoggedIn = true;
      this.user = user;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export default useAuthStore;
