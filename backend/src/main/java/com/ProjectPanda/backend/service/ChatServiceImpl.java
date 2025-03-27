package com.ProjectPanda.backend.service;

import com.ProjectPanda.backend.modal.Chat;
import com.ProjectPanda.backend.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService{

    private ChatRepository chatRepository;

    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}
