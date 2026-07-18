import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"discover",
    initialState:{
        trend:null,
        loading:false,
        error:null
    },

    reducers:{
        setTrend:(state,action)=>{
            state.trend = action.payload
        },
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        clearError:(state)=>{
            state.error = null
        }

    }
})