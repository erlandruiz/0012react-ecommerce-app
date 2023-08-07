import { createStore } from "@reduxjs/toolkit";
import root from "./main";
import { createStoreHook } from "react-redux";



const store = createStore(root)

export default store