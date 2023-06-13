import {createAsyncThunk} from '@reduxjs/toolkit';
import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from '../../permissions/location';
import {getNameCurrentPosition} from '../../api/requests';

export const getLocationThunk = createAsyncThunk(
  'location/getUserLocation',
  async (_params, {rejectWithValue}) => {
    try {
      const result = requestLocationPermission();
      result.then(res => {
        if (res) {
          Geolocation.getCurrentPosition(
            async position => {
              const response = await getNameCurrentPosition(
                position.coords.latitude,
                position.coords.longitude,
              );
              return {
                ...response.data.at(),
                lat: position.coords.latitude,
                lot: position.coords.longitude,
              };
            },
            error => {
              rejectWithValue();
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      });
    } catch (error) {
      rejectWithValue();
    }
  },
);
