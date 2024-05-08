import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./counterAPI";


export interface CounterState {
  modals:{
    contacts:boolean,
    demo:{isDemo:boolean,open:boolean},
    
  }
}

const initialState: CounterState = {
  modals:{
    contacts:false,
    demo:{isDemo:false,open:false}
  }
};

// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addModals: (state, action: PayloadAction<typeof state.modals>) => {
      state.modals = action.payload;
    },
  },
});

export const {
  addModals
} = counterSlice.actions;

export const actualModals = (state: RootState) => state.counter.modals;

export default counterSlice.reducer;
