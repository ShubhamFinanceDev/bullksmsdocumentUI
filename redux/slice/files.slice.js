import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    files: [],
    Smskit:[],
    NewSmsSendDetails:[]

}

export const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        setFiles: (state, action) => {
            state.files = action.payload
        },
        setSmskit: (state, action) => {
            state.Smskit = action.payload
        },

        setNewSmsSendDetails: (state, action) => {
            state.NewSmsSendDetails = action.payload || []
        },


    },
});

export const { setFiles, setSmskit,setNewSmsSendDetails } = filesSlice.actions;
export default filesSlice.reducer;