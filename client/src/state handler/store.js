import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './index';


const store = configureStore({
    reducer:authReducer,
});

export default store;