// // import { Button } from "@/components/ui/button";
// // import { createPayment } from "@/Redux/Payment/Action";
// // import { CheckCircledIcon } from "@radix-ui/react-icons";
// // import { useDispatch } from "react-redux";

// // const SubscriptionCard = ({ data }) => {
// //   const dispatch = useDispatch();

// //   const handleUpgrade = () => {
// //     dispatch(
// //       createPayment({
// //       planType: data.planType,
// //         jwt: localStorage.getItem("jwt"),
// //       })
// //     );
// //   };

// //   return (
// //     <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
// //       <p>{data.planname}</p>
// //       <p>
// //         <span className="text-xl font-semibold">₹{data.price}/</span>
// //         <span>{data.planType}</span>
// //       </p>

// //       {data.planType === "ANNUALLY" && (
// //         <p className="text-green-500">30% off</p>
// //       )}

// //       <Button onClick={handleUpgrade} className="w-full">
// //         {data.buttonName}
// //       </Button>

// //       <div>
// //         {data.features?.map((item) => (
// //           <div key={item} className="flex items-center gap-2">
// //             <CheckCircledIcon />
// //             <p>{item}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubscriptionCard;
// import { Button } from "@/components/ui/button";
// import { createPayment } from "@/Redux/Payment/Action";
// import { CheckCircledIcon } from "@radix-ui/react-icons";

// const SubscriptionCard = ({ data }) => {
//   const handleUpgrade = () => {
//     createPayment({
//       planType: data.planType,
//       jwt: localStorage.getItem("jwt"),
//     });
//   };

//   return (
//     <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
//       <p>{data.planname}</p>
//       <p>
//         <span className="text-xl font-semibold">₹{data.price}/</span>
//         <span>{data.planType}</span>
//       </p>

//       {data.planType === "ANNUALLY" && (
//         <p className="text-green-500">30% off</p>
//       )}

//       <Button onClick={handleUpgrade} className="w-full">
//         {data.buttonName}
//       </Button>

//       <div>
//         {data.features?.map((item) => (
//           <div key={item} className="flex items-center gap-2">
//             <CheckCircledIcon />
//             <p>{item}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubscriptionCard;


import { Button } from "@/components/ui/button";
import { createPayment } from "@/Redux/Payment/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";

const SubscriptionCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleUpgrade = () => {
    if (data.buttonName === "Current Plan") return;  // Don't trigger anything for current plan
    dispatch(
      createPayment({
        planType: data.planType,  // Send planType to backend
        jwt: localStorage.getItem("jwt"),
      })
    );
  };
  

  const isCurrent = data.buttonName === "Current Plan";

  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
      <p>{data.planname}</p>
      <p>
        <span className="text-xl font-semibold">₹{data.price}/</span>
        <span>{data.planType}</span>
      </p>

      {data.planType === "ANNUALLY" && (
        <p className="text-green-500">30% off</p>
      )}

      <Button
        onClick={handleUpgrade}
        className={`w-full ${
          isCurrent
            ? "bg-gray-500 cursor-not-allowed text-white hover:bg-gray-500"
            : ""
        }`}
        disabled={isCurrent}
      >
        {data.buttonName}
      </Button>

      <div>
        {data.features?.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircledIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
