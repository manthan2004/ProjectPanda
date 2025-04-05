import api, { API_BASE_URL } from "@/config/api"

export const createPayment=async({planType,jwt})=>{
    try{
        const {data}=await api.post(`/api/payment/payments/${planType}`)
        if(data.payment_link_url){
            window.location.href=data.payment_link_url
        }
    }catch (error){
            console.log(error.response?.data || error.message)
        }
    }
    
 