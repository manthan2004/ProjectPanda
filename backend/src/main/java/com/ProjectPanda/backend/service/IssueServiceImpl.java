package com.ProjectPanda.backend.service;

import com.ProjectPanda.backend.modal.Issue;
import com.ProjectPanda.backend.request.IssueRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService {
    @Override
    public Optional<Issue> getIssueById(Long issueId) throws Exception {
        return Optional.empty();
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {
        return List.of();
    }

    @Override
    public Issue createIssue(IssueRequest issue, Long userid) throws Exception {
        return null;
    }

    @Override
    public String deleteIssue(Long issueId, Long userid) throws Exception {
        return "";
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        return null;
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {
        return null;
    }
}
