import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null,
    parcelas : [
      {
        nombre: 'Parcela Isla',
        planta: 'Agave',
        coordenadas: { latitud: 20.814347, longitud: -104.013388 },
        dueño: 'Angel Daniel'
      },
      {
        nombre: 'Parcela Sol',
        planta: 'Agave',
        coordenadas: { latitud: 20.815456, longitud: -104.014567 },
        dueño: 'Miguel Ángel'
      },
      {
        nombre: 'Parcela Luna',
        planta: 'Agave',
        coordenadas: { latitud: 20.816789, longitud: -104.015678 },
        dueño: 'Sofía López'
      },
      {
        nombre: 'Parcela Estrella',
        planta: 'Agave',
        coordenadas: { latitud: 20.817890, longitud: -104.016789 },
        dueño: 'Carlos Martínez'
      },
      {
        nombre: 'Parcela Río',
        planta: 'Agave',
        coordenadas: { latitud: 20.818901, longitud: -104.017890 },
        dueño: 'María González'
      },
      {
        nombre: 'Parcela Sierra',
        planta: 'Agave',
        coordenadas: { latitud: 20.819012, longitud: -104.018901 },
        dueño: 'José Hernández'
      },
      {
        nombre: 'Parcela Bosque',
        planta: 'Agave',
        coordenadas: { latitud: 20.820123, longitud: -104.019012 },
        dueño: 'Lucía García'
      },
      {
        nombre: 'Parcela Playa',
        planta: 'Agave',
        coordenadas: { latitud: 20.821234, longitud: -104.020123 },
        dueño: 'Raúl Pérez'
      },
      {
        nombre: 'Parcela Montaña',
        planta: 'Agave',
        coordenadas: { latitud: 20.822345, longitud: -104.021234 },
        dueño: 'Claudia Ramírez'
      },
      {
        nombre: 'Parcela Valle',
        planta: 'Agave',
        coordenadas: { latitud: 20.823456, longitud: -104.022345 },
        dueño: 'Antonio Rodríguez'
      },
      {
        nombre: 'Parcela Lago',
        planta: 'Agave',
        coordenadas: { latitud: 20.824567, longitud: -104.023456 },
        dueño: 'Fernanda Ortega'
      }
    ]
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
    addParcela(data){
      this.parcelas.push(data)
    }
  },
});

export default useAuthStore;
