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

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    rocketStatus: (state, action) => {
      const reservedRockets = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      return { ...state, rockets: reservedRockets };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state, isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const getRockets = action.payload.map((rocket) => ({
          id: rocket.id,
          image: rocket.flickr_images[0],
          name: rocket.name,
          description: rocket.description,
          reserved: false,
        }));
        return { ...state, rockets: getRockets, isLoading: false };
      })
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { rocketStatus } = rocketsSlice.actions;
export default rocketsSlice.reducer;
