const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  processor: null,
  motherboard: null,
  ram: null,
  powerSupply: null,
  storage: null,
  monitor: null,
  total: 0,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      switch (action.payload.categoryUrl) {
        case "processor":
          state.processor = action.payload;
          break;
        case "motherboard":
          state.motherboard = action.payload;
          break;
        case "ram":
          state.ram = action.payload;
          break;
        case "power-supply-unit":
          state.powerSupply = action.payload;
          break;
        case "storage":
          state.storage = action.payload;
          break;
        case "monitor":
          state.monitor = action.payload;
          break;
        default:
          break;
      }

      state.total += action.payload.price
    },

    removeFromBuilder: (state, action) => {
      switch (action.payload.categoryUrl) {
        case "processor":
          state.processor = null;
          break;
        case "motherboard":
          state.motherboard = null;
          break;
        case "ram":
          state.ram = null;
          break;
        case "power-supply-unit":
          state.powerSupply = null;
          break;
        case "storage":
          state.storage = null;
          break;
        case "monitor":
          state.monitor = null;
          break;
        default:
          break;
      }

      state.total -= action.payload.price;
    },
  },
});

export const { addToBuilder, removeFromBuilder } = builderSlice.actions;
export default builderSlice.reducer;
