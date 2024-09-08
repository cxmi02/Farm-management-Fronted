import axios from "axios";

const API_URL = "http://localhost:3000/api";

export async function getCorrals() {
  try {
    const response = await axios.get(`${API_URL}/corrals`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener corrales:", error);
    throw error;
  }
}

export async function getAnimalsByCorral(corralId) {
  try {
    const response = await axios.get(`${API_URL}/animals`, {
      params: { corralId },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener animales:", error);
    throw error;
  }
}
