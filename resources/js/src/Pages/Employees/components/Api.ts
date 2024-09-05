import { useQuery } from "react-query";
import axios from "axios";
import { apiBase } from "../../../config";
const api = axios.create({
    baseURL: apiBase.API_URL,
})
export const getEmployees = async () => {
    try {
        const url = '/api/v1/list/empleados'
        const response: any = await api.get(url)
        if (response.status) {
            return response.data
        }
    } catch (e) {
        throw new Error("Error fetching groups");
    }
}


export const useGetEmployees = () => {
    const query = useQuery(['employees'], getEmployees, {
        refetchOnWindowFocus: false,

    });
    return query
}
export const getProvinces = async () => {
    try {
        const url = '/api/v1/list/provincias'
        const response: any = await api.get(url)
        if (response.status) {
            return response.data
        }
    } catch (e) {
        throw new Error("Error fetching groups");
    }
}


export const useGetProvinces = () => {
    const query = useQuery(['getProvinces'], getProvinces, {
        refetchOnWindowFocus: false,

    });
    return query
}
//save 
export const saveEmployees = async (data: any) => {
    try {
        const url = '/api/v1/add/empleados'
        const response: any = await api.post(url, data)
        if (response.status) {
            return response.data
        }
    } catch (e: any) {
        return e.response.data.message
    }
}
//edit  
export const editEmployees = async (data: any) => {
    try {
        const url = '/api/v1/edit/empleados'
        const response: any = await api.post(url, data)
        if (response.status) {
            return response.data
        }
    } catch (e) {
        throw new Error("Error fetching groups");
    }
}