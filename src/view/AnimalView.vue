<template>
  <div class="animal-view">
    <h1>Visualización de Animales en Corrales</h1>
    <div class="select-container">
      <label for="corral-select">Selecciona un corral:</label>
      <select id="corral-select" v-model="selectedCorral" @change="fetchAnimals">
        <option value="">-- Selecciona --</option>
        <option v-for="corral in corrals" :key="corral.id" :value="corral.id">
          {{ corral.name }}
        </option>
      </select>
    </div>
    <animal-table :animals="animals" />
    <div v-if="loading">Cargando...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { getCorrals, getAnimalsByCorral } from '@/api/AnimalService';
import AnimalTable from '@/components/AnimalsTable.vue';

export default {
  name: 'AnimalView',
  components: {
    AnimalTable
  },
  data() {
    return {
      corrals: [],
      selectedCorral: '',
      animals: [],
      loading: false,
      error: null
    };
  },
  async created() {
    try {
      this.loading = true;
      this.corrals = await getCorrals();
    } catch (error) {
      this.error = 'Error al obtener corrales';
      console.error('Error al obtener corrales:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async fetchAnimals() {
      if (this.selectedCorral) {
        try {
          this.loading = true;
          this.error = null;
          this.animals = await getAnimalsByCorral(this.selectedCorral);
        } catch (error) {
          this.error = 'Error al obtener animales';
          console.error('Error al obtener animales:', error);
        } finally {
          this.loading = false;
        }
      } else {
        this.animals = [];
      }
    }
  }
}
</script>

<style scoped>
.animal-view {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.select-container {
  margin-bottom: 20px;
}
</style>
