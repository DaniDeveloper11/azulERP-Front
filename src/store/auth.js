import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: !!localStorage.getItem("token"), // Inicializa isLoggedIn con el valor de token en el localStorage
    user: null,
  }),
  actions: {
    login(userInfo) {
      // Lógica para autenticar al usuario
      // Actualizar el estado después de la autenticación
      this.isLoggedIn = true;
      this.user = userInfo;
    },
    logout() {
      // Lógica para cerrar sesión
      // Restablecer el estado después de cerrar sesión
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('token');//limpia el local storage
    },
  },
});

export default useAuthStore
