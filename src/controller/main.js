

import { combineReducers } from "@reduxjs/toolkit"
import { cartReducer } from "./reducer"



const root = combineReducers ({
    cartReducer, 
})

export default root