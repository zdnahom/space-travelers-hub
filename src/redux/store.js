import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});
export default store;
