import { combineReducers, configureStore } from '@reduxjs/toolkit'

import loaderSlice from '@/redux/slice/loader.slice'
import validationSlice from '@/redux/slice/validation.slice'
import authSlice from '@/redux/slice/auth.slice'
import filesSlice from '@/redux/slice/files.slice'
import dashboardSlice from './slice/dashboard.slice'

const rootReducer = combineReducers({
    loaderSlice,
    authSlice,
    validationSlice,
    filesSlice,
    dashboardSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store