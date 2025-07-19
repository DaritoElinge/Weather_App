import axios from 'axios';
import { API_BASE_URL } from './constants';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${city}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || { message: 'Error al obtener el clima' };
  }
};
