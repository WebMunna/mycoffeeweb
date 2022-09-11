import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import coffeeReducer from '../features/coffeeSlice';
import adminPanelReducer from '../features/panelSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    coffeeState: coffeeReducer,
    panelState: adminPanelReducer
  },
});
