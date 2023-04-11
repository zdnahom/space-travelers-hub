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
    const response = await axios.patch(`${baseUrl}/${id}`, {
      reserved: true,
    });
    return response.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state) => ({
        ...state,
        status: 'rejected',
        error: true,
      }))
      .addCase(reserveRocket.fulfilled, (state, action) => {
        const updatedRockets = state.rockets.map((rocket) => {
          if (rocket.id === action.payload.id) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        });
        return { ...state, rockets: updatedRockets };
      });
  },
});

export default rocketsSlice.reducer;
