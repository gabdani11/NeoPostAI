import {register, login, getUser, logout} from '../api/auth.api'
import {setUser, setLoading, setError, clearError, logout as logoutAction} from '../auth.slice'
import {useDispatch} from 'react-redux'


function useAuth()
{
    const dispatch = useDispatch()

    /**Register User Hook */
    const registerUser = async(data) =>{
        console.log(data)
        try{
            dispatch(clearError())
            dispatch(setLoading(true))
            const response = await register(data)
            dispatch(setUser(response.user))
            return response
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Failed to register user"))
            throw error
        }finally{
            dispatch(setLoading(false))
        }
    }

    /**Login User Hook */
    const loginUser = async(data) =>{
        try{
            dispatch(clearError())
            dispatch(setLoading(true))
            const response = await login(data)
            dispatch(setUser(response.user))
            return response
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Failed to login user"))
            throw error
        }finally{
            dispatch(setLoading(false))
        }
    }
    /**Get User Hook */
    const fetchCurrentUser = async() =>{
        try{
            dispatch(clearError())
            dispatch(setLoading(true))
            const response = await getUser()
            dispatch(setUser(response.user))
            return response
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Failed to get user data"))
            throw error
        }finally{
            dispatch(setLoading(false))
        }
    }

    /**Logout User Hook */

    const logoutUser = async() =>{
        try{
            dispatch(clearError())
            dispatch(setLoading(true))
            await logout()
            dispatch(logoutAction())
        } catch (error) {
            dispatch(setError(error.response?.data?.message || "Failed to logout user"))
            throw error
        }finally{
            dispatch(setLoading(false))
        }
    }


    return {registerUser, loginUser, fetchCurrentUser, logoutUser}
}
export default useAuth