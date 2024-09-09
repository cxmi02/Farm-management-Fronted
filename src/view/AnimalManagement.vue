<template>
  <div class="container">
    <h1>Visualización de Animales en Corrales</h1>
    <div class="select-container">
      <label for="corral-select">Selecciona un corral:</label>
      <select id="corral-select" class="select">
        <option value="">-- Selecciona --</option>
        <option value="corral1">Corral 1</option>
        <option value="corral2">Corral 2</option>
        <option value="corral3">Corral 3</option>
      </select>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Animal 1</td>
            <td>Especie A</td>
            <td>3 años</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Animal 2</td>
            <td>Especie B</td>
            <td>5 años</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "./AnimalManagement.css";

export default {
  name: "AnimalView",
};
</script>
