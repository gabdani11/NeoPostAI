import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../../features/auth/auth.slice'
import discoverReducer from '../../features/discover/discover.slice'

const store = configureStore({
    reducer:{
        auth: authReducer,
        discover:discoverReducer
    }
})
export default store