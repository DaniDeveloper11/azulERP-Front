import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: !!localStorage.getItem('token'), // Inicializa isLoggedIn con el valor de token en el localStorage
    user: JSON.parse(localStorage.getItem('user')) || null, // Inicializa el usuario con el valor en el localStorage
  }),
  actions: {
    login(data) {
      const { access_token, user } = data;
      // Guardar el token y la información del usuario en el localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Actualizar el estado después de la autenticación
      this.isLoggedIn = true;
      this.user = user;
    },
    logout() {
      // Lógica para cerrar sesión
      // Restablecer el estado después de cerrar sesión
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('token'); // limpia el local storage
      localStorage.removeItem('user');  // limpia la información del usuario
    },
  },
});

export default useAuthStore;
