import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducer/CounterSlice";
import ProductsSlice from "./reducer/ProductsSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        products: ProductsSlice
    }
});

export default store;