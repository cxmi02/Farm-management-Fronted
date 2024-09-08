<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Edad</th>
          <th>¿Peligroso?</th>
          <th>Restricciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="animal in animals" :key="animal.id">
          <td>{{ animal.name }}</td>
          <td>{{ animal.species }}</td>
          <td>{{ animal.age }}</td>
          <td>{{ animal.isDangerous ? "Sí" : "No" }}</td>
          <td>{{ animal.restrictions.join(", ") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AnimalTable",
  props: {
    animals: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}
</style>
