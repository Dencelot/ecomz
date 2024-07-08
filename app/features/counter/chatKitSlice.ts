import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./counterAPI";
import { constructorData } from "@/app/data/constructor";

export interface CounterState {
  modals:{
    contacts:boolean,
    demo:{isDemo:boolean,open:boolean},
    
  },
  filters: object,
  activeFilter:boolean
}

const initialState: CounterState = {
  modals:{
    contacts:false,
    demo:{isDemo:false,open:false}
  },
  filters:{
    types:constructorData.filters.types.list[0],
    fonts:constructorData.filters.fonts.list[0],
    colors:constructorData.filters.colors.list[0]
  },
  activeFilter:false
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
    addFilters: (state, action: PayloadAction<typeof state.filters>) => {
      state.filters = action.payload;
    },
    addActiveFilter: (state, action: PayloadAction<typeof state.activeFilter>) => {
      state.activeFilter = action.payload;
    },
  },
});

export const {
  addModals,addFilters,addActiveFilter
} = counterSlice.actions;

export const actualModals = (state: RootState) => state.counter.modals;
export const actualActiveFilter = (state: RootState) => state.counter.activeFilter;
export const actualFilters = (state: RootState) => state.counter.filters;


export default counterSlice.reducer;
