import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./features/addToBuilderSlice";


const store = configureStore({
    reducer:{
        builder: builderReducer
    }
})

export default store;