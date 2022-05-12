import axios from "axios";

const API_KEY = 'df2707ff1e0d7961ac3582ca86e0dee5';
const LOC_URL = `http://api.openweathermap.org/geo/1.0/direct?appid=${API_KEY}`;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const get_locations = async ({ city, country } = {}) => {
  try {
    const url = `${LOC_URL}&q=${city}&limit=5`;
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    error.message = `[${get_location_data.name}] ${error.message}`;
    throw error;
  }
}

export const get_weather = async ({ lat, lon } = {}) => {
  try {
    const url = `${WEATHER_URL}&lat=${lat}&lon=${lon}`;
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    error.message = `[${get_location_data.name}] ${error.message}`;
    throw error;
  }
}

export const get_weather_of_city = async ({ city }) => {
  try {
    const locations = await get_locations({ city });
    const data = [];
    for (const location of locations) {
      const { lat, lon } = location; 
      const weather = await get_weather({ lat, lon });
      data.push({ location, weather });
    }
    return data;
  } catch (error) {
    error.message = `[${get_weather_of_city.name}] ${error.message}`;
    throw error;
  }
}
