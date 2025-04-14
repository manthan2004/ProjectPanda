// // import api, { API_BASE_URL } from "@/config/api"

// // export const createPayment=async({planType,jwt})=>{
// //     try{
// //         const {data}=await api.post(`/api/payment/payments/${planType}`)
// //         if(data.payment_link_url){
// //             window.location.href=data.payment_link_url
// //         }
// //     }catch (error){
// //             console.log(error.response?.data || error.message)
// //         }
// //     }
    
 
// import api from "@/config/api";

// export const createPayment = async ({ planType, jwt }) => {
//   try {
//     const { data } = await api.post(
//       `/api/payment/payments/${planType}`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       }
//     );

//     if (data.payment_link_url) {
//       window.location.href = data.payment_link_url;
//     }
//   } catch (error) {
//     console.log(error.response?.data || error.message);
//   }
// };
import api from "@/config/api";
import { getUserSubscription } from "../Subscription/Action";

export const createPayment = ({ planType, jwt }) => async (dispatch) => {
  try {
    const { data } = await api.post(
      `/api/payment/payments/${planType}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    // If plan is FREE, just update the Redux state
    if (planType === "FREE") {
      dispatch(getUserSubscription());
      return;
    }

    // If it's a paid plan, redirect to Razorpay
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};
