import {createSlice} from "@reduxjs/toolkit";


const postEditorSlice = createSlice({
    name:"postEditor",
    initialState:{
        postContent:"",
        loading:false,
        error:null
    },
    reducers:{
        setPostContent:(state,action)=>{
            state.postContent = action.payload
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
export const {setPostContent,setLoading,setError,clearError} = postEditorSlice.actions
export default postEditorSlice.reducer