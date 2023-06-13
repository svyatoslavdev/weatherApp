import {configureStore} from '@reduxjs/toolkit';
import locationSlice from './location/location.slice';

export const store = configureStore({
  reducer: {location: locationSlice},
});
