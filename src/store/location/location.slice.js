import {createSlice} from '@reduxjs/toolkit';
import {getLocationThunk} from './location.thunk';

const initialState = {
  details: {lat: null, log: null, city: null, country: null, localNames: null},
  isLoading: false,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getLocationThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getLocationThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.details = {...payload, localNames: payload.local_names};
      })
      .addCase(getLocationThunk.rejected, state => {
        state.isLoading = false;
      }),
});

export default locationSlice.reducer;
