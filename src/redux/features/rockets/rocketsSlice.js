import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  },
);

export const reserveRocket = createAsyncThunk(
  'rockets/reserveRocket',
  async (id) => {
    // simulate API request to reserve the rocket
    // since the API doesn't have a reserve endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return id;
  },
);

export const cancelReservation = createAsyncThunk(
  'rockets/cancelReservation',
  async (id) => {
  // simulate API request to cancel the reservation
  // since the API doesn't have a cancel reservation endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return id;
  },
);

export const selectReservedRockets = (state) => state.rockets.rockets.filter(
  (rocket) => rocket.reserved,
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'success';
        action.payload.map((rocket) => {
          const existingRocketIndex = state.rockets.findIndex(
            (reserve) => reserve.id === rocket.id,
          );
          if (existingRocketIndex !== -1) {
            rocket.reserved = state.rockets[existingRocketIndex].reserved;
          } else {
            rocket.reserved = false;
            state.rockets.push(rocket);
          }
          return null;
        });
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(reserveRocket.fulfilled, (state, action) => {
        const rocketId = action.payload;
        const reservedRocket = state.rockets.find((rocket) => rocket.id === rocketId);
        if (reservedRocket) {
          reservedRocket.reserved = true;
        }
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        const rocketId = action.payload;
        const reservedRocket = state.rockets.find((rocket) => rocket.id === rocketId);
        if (reservedRocket) {
          reservedRocket.reserved = false;
        }
      });
  },
});

export default rocketsSlice.reducer;
