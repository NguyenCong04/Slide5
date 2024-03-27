import {configureStore, createSlice} from '@reduxjs/toolkit';

//Khai báo slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    name: '',
    time: '',
  },
  reducers: {
    addItem: (state: any, action: any) => {
      //Payload là tham số chứa dữ liệu đc giửi và hàm add item thông qua dispatch
      state.items.push(action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

//Đăng ký với reducer
export const container: any = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootStates = ReturnType<typeof container.getSate>;
export type AppDistpatch = typeof container.dispatch;
export const {addItem,clearCart} = cartSlice.actions;
