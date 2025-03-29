package com.ProjectPanda.backend.repository;

import com.ProjectPanda.backend.modal.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation,Long> {

        Invitation findByToken(String token);

        Invitation findByEmail(String userEmail);
}
