import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../app/helpers/constants";
import { postRequest } from "../app/helpers/fetch";

const initialState = {
  producedWaste: {},
};

export const createProducedWaste = createAsyncThunk(
  "createProducedWaste",
  async (body) => {
    const result = await postRequest(`${API_URL}/createProducedWaste`, body);
    return result;
  }
);

export const getProducedWasteByID = createAsyncThunk(
  "getProducedWasteByID",
  async (body) => {
    const result = await postRequest(`${API_URL}/getProducedWasteByID`, body);
    return result;
  }
);

export const updateProducedWasteWeight = createAsyncThunk(
    "updateProducedWasteWeight",
    async (body) => {
      const result = await postRequest(`${API_URL}/updateProducedWasteWeightInKg`, body);
      return result;
    }
  );

  export const updateProducedWasteCollectorID = createAsyncThunk(
    "updateProducedWasteCollectorID",
    async (body) => {
      const result = await postRequest(`${API_URL}/updateProducedWasteCollectorID`, body);
      return result;
    }
  );

const wasteReducer = createSlice({
  name: "waste",
  initialState,
  extraReducers: {
    [createProducedWaste.fulfilled]: (state, action) => {},
    [updateProducedWasteWeight.fulfilled]: (state, action) => {},
    [updateProducedWasteCollectorID.fulfilled]: (state, action) => {},
    [getProducedWasteByID.fulfilled]: (state, action) => {
      let data = action.payload;
      state.producedWaste = data;
      return state;
    },
  },
});

export default wasteReducer.reducer;
