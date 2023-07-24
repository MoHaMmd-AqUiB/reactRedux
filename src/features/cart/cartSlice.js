import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchItems,updateItem,deleteItem,addItems} from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};


export const fetchAsync = createAsyncThunk(
  'items/fetchItems',
  async () => {
    const response = await fetchItems();
    return response.data;
  }
);
export const addAsync = createAsyncThunk(
  'items/addItems',
  async (item) => {
    const response = await addItems(item);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=action.payload;
      })
      .addCase(addAsync.fulfilled,(state,action)=>{
        state.items.push(action.payload);
      }) 
      ;
  },
});

// export const {  } = cartSlice.actions;


export default cartSlice.reducer;
