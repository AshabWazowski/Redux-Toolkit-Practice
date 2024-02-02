import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    data:[],

}
export const authReducer = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin: (state, action)=>{
                state.user = action.payload.user;
        }
    }
})

export const {setLogin} = authReducer.actions;

export default authReducer.reducer;