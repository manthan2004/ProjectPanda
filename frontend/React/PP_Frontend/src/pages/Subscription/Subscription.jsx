// import { useSelector } from "react-redux";
// import SubscriptionCard from "./SubscriptionCard";

// const paidPlan =[
//     "Add unlimited project",
//     "Access to live chat",
//     "Add unlimited team member",
//     "Advanced Reporting",
//     "Priority Support",
//     "Customization Options",
//     "Integration Support",
//     "Advanced Security",
//     "Training Resources",
//     "Access Control",
//     "Custom Workflows",

// ];

// const annualPlan =[
//     "Add unlimited project",
//     "Access to live chat",
//     "Add unlimited team member",
//     "Advanced Reporting",
//     "Priority Support",
//     "Everything which monthly plan has",

// ];

// const freePlan =[
//     "Add only 3 projects",
//     "Basic Task Management",
//     "Project Collaboration",
//     "Basic Reporting",
//     "Email Notifications",
//     "Basic Access Control"
// ];

// const Subscription=()=>{
//     const {subscription}=useSelector(store=>store)
//     console.log(subscription)
//     console.log("Subscription state:", subscription);
// console.log("User's plan type:", subscription.userSubscription?.planType);
//     return(
//         <div className="p-10">
//             <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
//             <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
//                 <SubscriptionCard data={{
//                     planname: "Free", 
//                     features: freePlan, 
//                     planType:"FREE", 
//                     price:0, 
//                     buttonName:subscription.userSubscription?.planType=="FREE"?"Current Plan":"Get Started"}} />
//                 <SubscriptionCard data={{
//                     planname: "Monthly Paid Plan", 
//                     features: paidPlan, 
//                     planType:"MONTHLY", 
//                     price:799, 
//                     buttonName:subscription.userSubscription?.planType=="MONTHLY"?"Current Plan":"Get Started"}}/>
//                 <SubscriptionCard data={{
//                     planname: "Annually Paid Plabn", 
//                     features: annualPlan, 
//                     planType:"ANNUALLY", 
//                     price:6999, 
//                     buttonName:subscription.userSubscription?.planType=="ANNUALLY"? "Current Plan":"Get Started"}}/>
//             </div>
//         </div>
//     )
// }
// export default Subscription



import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SubscriptionCard from "./SubscriptionCard";
import { getUserSubscription } from "@/Redux/Subscription/Action";

const paidPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Customization Options",
  "Integration Support",
  "Advanced Security",
  "Training Resources",
  "Access Control",
  "Custom Workflows",
];

const annualPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Everything which monthly plan has",
];

const freePlan = [
  "Add only 3 projects",
  "Basic Task Management",
  "Project Collaboration",
  "Basic Reporting",
  "Email Notifications",
  "Basic Access Control",
];

const Subscription = () => {
  const { subscription } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserSubscription());
  }, [dispatch]);

  console.log("Subscription state:", subscription);
  console.log("User's plan type:", subscription.userSubscription?.planType);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planname: "Free",
            features: freePlan,
            planType: "FREE",
            price: 0,
            buttonName:
              subscription.userSubscription?.planType === "FREE"
                ? "Current Plan"
                : "Get Started",
          }}
          currentPlanType={subscription.userSubscription?.planType}
        />
        <SubscriptionCard
          data={{
            planname: "Monthly Paid Plan",
            features: paidPlan,
            planType: "MONTHLY",
            price: 799,
            buttonName:
              subscription.userSubscription?.planType === "MONTHLY"
                ? "Current Plan"
                : "Get Started",
          }}
          currentPlanType={subscription.userSubscription?.planType}
        />
        <SubscriptionCard
          data={{
            planname: "Annually Paid Plan",
            features: annualPlan,
            planType: "ANNUALLY",
            price: 6999,
            buttonName:
              subscription.userSubscription?.planType === "ANNUALLY"
                ? "Current Plan"
                : "Get Started",
          }}
          currentPlanType={subscription.userSubscription?.planType}
        />
      </div>
    </div>
  );
};

export default Subscription;
