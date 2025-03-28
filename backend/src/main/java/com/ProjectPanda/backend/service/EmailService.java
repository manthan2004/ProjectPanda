package com.ProjectPanda.backend.service;

import jakarta.mail.MessagingException;

public interface EmailService {

    void sendEmailWithToken(String USEReMAIL,String link) throws MessagingException;
}
