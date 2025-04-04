import { API_BASE_URL } from "@/config/api";
import { GET_USER_REQUEST, GET_USER_SUCCESS,LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios";
export const register=userData=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{

            const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,userData);
            if(data.jwt){
                localStorage.setItem("jwt",data.jwt)
                dispatch({type:REGISTER_SUCCESS, payload:data})
            }
            console.log("register success",data)
    }catch (error){
        // console.log(error)
        alert("User already exists")
        console.log("Login Error:", error.response?.data || error.message);

    }
} 
export const login=userData=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const config = { headers: { "Content-Type": "application/json" } };//
            const {data}=await axios.post(`${API_BASE_URL}/auth/signing`,userData);
            if(data.jwt){
                localStorage.setItem("jwt",data.jwt)
                dispatch({type:LOGIN_SUCCESS, payload:data})
            }
            console.log("LOGIN success",data)
    }catch (error){
        // console.log(error)
        alert("Incorrect User Or Password")
        console.error("Login Error:", error.response?.data || error.message);
    }
} 
export const getUser=()=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
            const {data}=await axios.get(`${API_BASE_URL}/api/users/profile`,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("jwt")}`
                }
            });
            // if(data.jwt){
                // localStorage.setItem("jwt",data.jwt)
                dispatch({type:GET_USER_SUCCESS, payload:data})
            // }
            // console.log("user success",data)
    }catch (error){
        console.log(error)
    }
} 
export const logout=()=>async (dispatch)=>{
    dispatch({type:LOGOUT});
    localStorage.clear();
}