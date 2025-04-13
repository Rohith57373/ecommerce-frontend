import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/CartSlice"
import booksApi from './features/cart/books/booksApi'
import ordersApi from './features/cart/orders/ordersApi'

export default configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})