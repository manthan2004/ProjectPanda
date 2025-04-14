package com.ProjectPanda.backend.controller;

import com.ProjectPanda.backend.modal.PlanType;
import com.ProjectPanda.backend.modal.User;
import com.ProjectPanda.backend.response.PaymentLinkResponse;
import com.ProjectPanda.backend.service.UserService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Autowired
    private UserService userService;




    @PostMapping("/payments/{planType}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization")String jwt)
            throws Exception {
        User user=userService.findUserProfileByJwt(jwt);


        int amount = 799 * 100;

        if (planType.equals(PlanType.ANNUALLY)) {
            amount=amount*12;
            amount=(int)(amount*0.7);
        }

            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);


            JSONObject paymentLinkRequest = new JSONObject();

            paymentLinkRequest.put("amount",amount);
            paymentLinkRequest.put("currency","INR");
            // Create a JSON object with the customer details
            JSONObject customer = new JSONObject();
            customer.put("name",user.getFullName());

            customer.put("email",user.getEmail());
            paymentLinkRequest.put("customer",customer);

            // Create a JSON object with the notification settings
            JSONObject notify = new JSONObject();
            notify.put("email",true);
            paymentLinkRequest.put("notify",notify);

            // Set the callback URL and method
            paymentLinkRequest.put("callback_url","http://localhost:5173/upgrade_plan/success?planType="+planType);


            // Create the payment link using the paymentLink.create() method
            PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentLinkResponse res=new PaymentLinkResponse();
            res.setPayment_link_url(paymentLinkUrl);
            res.setPayment_link_id(paymentLinkId);

            return new ResponseEntity<>(res, HttpStatus.CREATED);

    }
}
