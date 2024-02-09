import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    data:[],

}
export const authReducer = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
                state.user = action.payload;
        },
        setData: (state, action) => {
              state.data = action.payload;  
        }
    },
});

export const {setLogin, setData} = authReducer.actions;

export default authReducer.reducer;