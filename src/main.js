import { createApp } from 'vue'; // Importar createApp en lugar de Vue
import App from './App.vue';
import router from './router';

const app = createApp(App); // Crear la aplicación con createApp
app.use(router); // Usar el router
app.mount('#app'); // Montar la aplicación