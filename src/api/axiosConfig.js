import axios from 'axios';

const KEY = '74ab045771262b6923a3d05d8e54163e';
const API = 'http://api.openweathermap.org/geo/1.0/';

const axiosConfigured = axios.create({
  baseURL: API,
});

export const get = (url, params) =>
  axiosConfigured.get(url, {params: {...params, appid: KEY}});
