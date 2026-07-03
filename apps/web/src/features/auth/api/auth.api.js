import axios from 'axios'
const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
const AUTH_ENDPOINT = "/api/auth"

//register api
export async function register(data) 
{
   const response = await http.post(`${AUTH_ENDPOINT}/register`, data)
   return response.data
}

//login api
export async function login(data)
{
   const response = await http.post(`${AUTH_ENDPOINT}/login`, data)
   return response.data
}

//logout api
export async function logout()
{
   const response = await http.post(`${AUTH_ENDPOINT}/logout`)
   return response.data
}

//get user api
export async function getUser()
{
   const response = await http.get(`${AUTH_ENDPOINT}/user`)
   return response.data
}

