import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};
export const getMissions = createAsyncThunk('missions/getMissions', async (_, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    changeMissionStatus: (state, action) => {
      const filteredMissions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
      return { ...state, missions: filteredMissions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getMissions.fulfilled, (state, action) => {
        const fetchedMissions = action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          reserved: false,
        }));
        return { ...state, missions: fetchedMissions, isLoading: false };
      })
      .addCase(getMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});
export const { changeMissionStatus } = missionsSlice.actions;
export default missionsSlice.reducer;
