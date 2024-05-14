import { createSlice } from '@reduxjs/toolkit'

let UserAuthSlice = createSlice({
    name : "userauth",
    initialState : false,
    reducers : {
        doLogin(state,action){
            return true;
        },
        doLogout(state, action){
            return false;
        }
    }
})

export default UserAuthSlice.reducer;
export let { doLogin, doLogout } = UserAuthSlice.actions;