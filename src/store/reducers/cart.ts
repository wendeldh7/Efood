import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuItem[]
  isVisible: boolean
  isCheckout: boolean
}
const initialState: CartState = {
  items: [],
  isVisible: false,
  isCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isVisible = true
    },
    close: (state) => {
      state.isVisible = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = initialState.items
    },
    openCheckout: (state) => {
      state.isCheckout = true
    },
    closeCheckout: (state) => {
      state.isCheckout = false
    }
  }
})

export const { add, open, close, remove, clear, openCheckout, closeCheckout } =
  cartSlice.actions
export default cartSlice.reducer
