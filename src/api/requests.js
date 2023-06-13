import {get} from './axiosConfig';

export const getNameCurrentPosition = (lat, lon) => get(`/reverse`, {lat, lon});
