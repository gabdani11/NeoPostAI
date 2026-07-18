import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})
const DISCOVER_ENDPOINT = "/api/ingestion"

export async function fetchDiscoverData() {
    const response = await http.get(`${DISCOVER_ENDPOINT}/get-trend`)
    return response.data
}