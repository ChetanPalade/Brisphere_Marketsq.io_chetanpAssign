
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitOrderForm = createAsyncThunk('orderForm/submit', async (formData) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
  return response.data;
});

const orderFormSlice= createSlice({
  name: 'orderForm',
  initialState: { data: {}, status: 'idle', error: null },
  reducers: {
    updateForm: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrderForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitOrderForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(submitOrderForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateForm } =  orderFormSlice.actions;
export default  orderFormSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const submitOrderForm = createAsyncThunk('orderForm/submit', async (formData) => {
//   const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
//   return response.data;
// });

// const orderFormSlice = createSlice({
//   name: 'orderForm',
//   initialState: { data: {}, status: 'idle', error: null },
//   reducers: {
//     updateForm: (state, action) => {
//       state.data = { ...state.data, ...action.payload };
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitOrderForm.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(submitOrderForm.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(submitOrderForm.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { updateForm } = orderFormSlice.actions;
// export default orderFormSlice.reducer;


