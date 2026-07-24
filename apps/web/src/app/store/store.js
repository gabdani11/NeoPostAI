import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../../features/auth/auth.slice'
import discoverReducer from '../../features/discover/discover.slice'
import postEditorReducer from '../../features/postEditor/postEditor.slice'

const store = configureStore({
    reducer:{
        auth: authReducer,
        discover:discoverReducer,
        postEditor:postEditorReducer

    }
})
export default store