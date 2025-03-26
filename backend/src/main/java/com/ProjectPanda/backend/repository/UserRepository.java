package com.ProjectPanda.backend.repository;

import com.ProjectPanda.backend.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail(String email);


}
