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
    addProcessor: (state, action) => {
      state.processor = action.payload;
    },
    addMotherboard: (state, action) => {
      state.motherboard = action.payload;
    },
    addRam: (state, action) => {
      state.ram = action.payload;
    },
    addPowerSupply: (state, action) => {
      state.powerSupply = action.payload;
    },
    addStorage: (state, action) => {
      state.storage = action.payload;
    },
    addMonitor: (state, action) => {
      state.monitor = action.payload;
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
        case "powerSupply":
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
    },
  },
});

export const {
  addProcessor,
  addMotherboard,
  addMonitor,
  addPowerSupply,
  addRam,
  addStorage,
  removeFromBuilder,
} = builderSlice.actions;
export default builderSlice.reducer;
