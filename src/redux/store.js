import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './features/missions/missionsSlice';
import rocketsReducer from './features/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice,
  },
});

export default store;
