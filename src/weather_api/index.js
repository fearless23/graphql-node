import axios from 'axios';

const API_KEY = 'df2707ff1e0d7961ac3582ca86e0dee5';
const LOC_URL = `http://api.openweathermap.org/geo/1.0/direct?appid=${API_KEY}`;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const unix_to_utc = (x) => x && new Date(x * 1000).toISOString();

export const get_locations = async ({ city, state, country } = {}) => {
  try {
    let q = city;
    if (state) q += `,${state}`;
    if (country) q += `,${country}`;
    const url = `${LOC_URL}&q=${q}&limit=5`;
    const response = await axios.get(url);
    /** @type {Array<any>} */
    const data = response.data;

    return data.map((x) => ({
      /** @type {number} */
      latitude: x.lat,
      /** @type {number} */
      longitude: x.lon,
      /** @type {string} */
      name: x.name,
      /** @type {string} */
      state: x.state,
      /** @type {string} */
      country: x.country,
    }));
  } catch (error) {
    error.message = `[${get_locations.name}] - ${error.message}`;
    throw error;
  }
};

export const get_weather = async ({ latitude, longitude } = {}) => {
  try {
    const url = `${WEATHER_URL}&lat=${latitude}&lon=${longitude}`;
    const response = await axios.get(url);
    const weather = response.data;

    const { id, visibility, timezone } = weather;
    const { main, description } = weather?.weather[0] ?? {};
    const {
      temp, // 319.82,
      feels_like, // 313.86,
      temp_min, // 319.82,
      temp_max, // 319.82,
      pressure, // 995,
      humidity, // 3,
      sea_level, // 995,
      grnd_level, // 971,
    } = weather?.main ?? {};
    const {
      speed, // : 4.87,
      deg, // : 293,
      gust, // : 6.59,
    } = weather?.wind ?? {};

    const {
      sunrise, // : 1652486681,
      sunset, // : 1652535828,
    } = weather?.sys ?? {};

    const { all: clouds } = weather?.clouds ?? {};
    return {
      latitude,
      longitude,
      // name,
      // state,
      // country,
      id,
      visibility,
      timezone,
      main,
      description,
      temp, // 319.82,
      feels_like, // 313.86,
      temp_min, // 319.82,
      temp_max, // 319.82,
      pressure, // 995,
      humidity, // 3,
      sea_level, // 995,
      grnd_level,
      wind_speed: speed, // : 4.87,
      wind_deg: deg, // : 293,
      wind_gust: gust,
      sunrise: unix_to_utc(sunrise), // : 1652486681,
      sunset: unix_to_utc(sunset),
      clouds,
    };
  } catch (error) {
    error.message = `[${get_weather.name}] - ${error.message}`;
    throw error;
  }
};

export const get_weather_of_city = async ({ city, state, country }) => {
  try {
    const locations = await get_locations({ city, state, country });
    const data = [];
    for (const location of locations) {
      const { latitude, longitude } = location;
      const weather = await get_weather({ latitude, longitude });
      data.push({ location, weather });
    }
    return data;
  } catch (error) {
    error.message = `[${get_weather_of_city.name}] - ${error.message}`;
    throw error;
  }
};
