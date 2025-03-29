package com.ProjectPanda.backend.service;


import com.ProjectPanda.backend.modal.Issue;
import com.ProjectPanda.backend.request.IssueRequest;

import java.util.List;
import java.util.Optional;



public interface IssueService {

    Optional<Issue> getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issue, Long userid) throws Exception;

    String deleteIssue(Long issueId,Long userid) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;

}

