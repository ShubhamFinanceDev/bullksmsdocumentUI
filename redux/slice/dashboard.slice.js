import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dashboarddata: [],

}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDeshboardData: (state, action) => {
            state.dashboarddata = action.payload
        },

    },
});

export const { setDeshboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;