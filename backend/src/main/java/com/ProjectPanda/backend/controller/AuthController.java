package com.ProjectPanda.backend.controller;


import com.ProjectPanda.backend.config.JwtProvider;
import com.ProjectPanda.backend.modal.Subscription;
import com.ProjectPanda.backend.modal.User;
import com.ProjectPanda.backend.repository.UserRepository;
import com.ProjectPanda.backend.request.LoginRequest;
import com.ProjectPanda.backend.response.AuthResponse;
import com.ProjectPanda.backend.service.CustomeUserDetailsImpl;
import com.ProjectPanda.backend.service.SubscriptionService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CustomeUserDetailsImpl customUserDetails;

    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(
            @RequestBody User user) throws Exception {


        User isUserExist = userRepository.findByEmail(user.getEmail());

        if (isUserExist!=null) {

            throw new Exception("Email Is Already Used With Another Account");
        }

        // Create new user
        User createdUser = new User();
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
//        createdUser.setRole(user.getRole());

        User savedUser = userRepository.save(createdUser);

        subscriptionService.createSubscription(savedUser);

        //11.4
        Subscription subscription = subscriptionService.getUsersSubscription(savedUser.getId());

        Authentication authentication=new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt= JwtProvider.generateToken(authentication);

        AuthResponse res=new AuthResponse();
        res.setMessage("signup success");
        res.setJwt(jwt);
        //11.4
        res.setPlanType(subscription.getPlanType().name());



        return new ResponseEntity<>(res, HttpStatus.CREATED);

    }

    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> signing(@RequestBody LoginRequest loginRequest) {

        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

//        System.out.println(username + " ----- " + password);

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);
        AuthResponse res = new AuthResponse();

        res.setMessage("Login Success");
        res.setJwt(jwt);

        //11.4
        // 🔍 Fetch user
        User user = userRepository.findByEmail(username);

        // 🔍 Fetch subscription and set plan type
        try {
            Subscription subscription = subscriptionService.getUsersSubscription(user.getId());
            if (subscription != null) {
                res.setPlanType(subscription.getPlanType().name());
            }
        } catch (Exception e) {
            // Optional: Log or handle error
            res.setPlanType("UNKNOWN");
        }

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        System.out.println("sign in userDetails - " + userDetails);

        if (userDetails == null) {
            System.out.println("sign in userDetails - null " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            System.out.println("sign in userDetails - password not match " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

}

