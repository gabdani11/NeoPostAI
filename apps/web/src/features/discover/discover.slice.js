import {createSlice} from "@reduxjs/toolkit";

const discoverSlice = createSlice({
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
export const {setTrend,setLoading,setError,clearError} = discoverSlice.actions
export default discoverSlice.reducer