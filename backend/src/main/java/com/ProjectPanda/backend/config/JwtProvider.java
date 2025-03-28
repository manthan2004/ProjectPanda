package com.ProjectPanda.backend.config;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;

import javax.crypto.SecretKey;
import javax.xml.crypto.Data;
import java.security.Key;
import java.util.Date;

public class JwtProvider {

    static SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    public static String generateToken(Authentication auth) {

//        Collection<? extends GrantedAuthority> authorities =
//                auth.getAuthorities();
//        String roles = populateAuthorities(authorities);

        //                .claim("authorities", roles)

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 86400000))
                .claim("email", auth.getName())
//                .claim("authorities", roles)
                .signWith(key)
                .compact();

    }

    public static String getEmailFromJwtToken(String jwt) {

        jwt = jwt.substring(7);
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build()
                .parseClaimsJws(jwt).getBody();
        return String.valueOf(claims.get("email"));
    }
}
