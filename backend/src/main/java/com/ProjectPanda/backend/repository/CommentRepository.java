package com.ProjectPanda.backend.repository;

import com.ProjectPanda.backend.modal.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {

        List<Comment>findByIssueId(Long issueId);
}
