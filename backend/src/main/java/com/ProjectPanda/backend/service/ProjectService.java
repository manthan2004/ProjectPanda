package com.ProjectPanda.backend.service;


import java.util.List;

import com.ProjectPanda.backend.modal.Chat;
import com.ProjectPanda.backend.modal.Project;
import com.ProjectPanda.backend.modal.User;

public interface ProjectService {
    Project createProject(Project project, User user) throws Exception;


    List<Project> getProjectByTeam(User user,String category,String tag) throws Exception;


    Project getProjectById(Long projectId) throws Exception;

    void deleteProject(Long projectId,Long userId) throws Exception;

    Project updateProject(Project updatedProject, Long id) throws Exception;



    void addUserToProject(Long projectId, Long userId) throws Exception;

    void removeUserFromProject(Long projectId, Long userId) throws Exception;

    Chat getChatByProjectId(Long projectId) throws Exception;

    List<Project>searchProjects(String keyword, User user) throws Exception;

}
