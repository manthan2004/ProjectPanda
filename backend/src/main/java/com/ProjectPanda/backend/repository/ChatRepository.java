package com.ProjectPanda.backend.repository;

import com.ProjectPanda.backend.modal.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat,Long> {
}
