package com.ProjectPanda.backend.service;

import com.ProjectPanda.backend.modal.*;
import com.ProjectPanda.backend.repository.ProjectRepository;
import com.ProjectPanda.backend.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ChatService chatService;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

//    @Override
//    public Project createProject(Project project, User user) throws Exception {
////        User user = userService.findUserById(id);
//        Project createdProject=new Project();
//
//        createdProject.setOwner(user);
//        createdProject.setTags(project.getTags());
//        createdProject.setName(project.getName());
//        createdProject.setCategory(project.getCategory());
//        createdProject.setDescription(project.getDescription());
//        createdProject.getTeam().add(user);
//
//        System.out.println(createdProject);
//        Project savedProject=projectRepository.save(createdProject);
//
////        savedProject.getTeam().add(user);
//
//        Chat chat = new Chat();
//        chat.setProject(savedProject);
//        Chat projectChat = chatService.createChat(chat);
//        savedProject.setChat(projectChat);
//
//
//
//        return savedProject;
//    }

    @Override
    public Project createProject(Project project, User user) throws Exception {
    // 1. Fetch user subscription
    Subscription subscription = subscriptionRepository.findByUserId(user.getId());

    if (subscription.getPlanType() == PlanType.FREE) {
        int existingProjects = projectRepository.countByOwnerId(user.getId());

        if (existingProjects >= 3) {
            throw new Exception("Free plan allows only 3 projects. Upgrade your plan to add more.");
        }
    }

    // 2. Proceed with project creation
    Project createdProject = new Project();
    createdProject.setOwner(user);
    createdProject.setTags(project.getTags());
    createdProject.setName(project.getName());
    createdProject.setCategory(project.getCategory());
    createdProject.setDescription(project.getDescription());
    createdProject.getTeam().add(user);

    Project savedProject = projectRepository.save(createdProject);

    Chat chat = new Chat();
    chat.setProject(savedProject);
    Chat projectChat = chatService.createChat(chat);
    savedProject.setChat(projectChat);

    return savedProject;
}


    @Override
    public List<Project> getProjectByTeam(User user, String category, String tag) throws Exception {
        List<Project> projects= projectRepository.findByTeamContainingOrOwner(user,user);

        if (category != null) {
            projects = projects.stream()
                    .filter(project -> project.getCategory().equals(category))
                    .collect(Collectors.toList());
        }

        if (tag != null) {
            projects = projects.stream()
                    .filter(project -> project.getTags().contains(tag))
                    .collect(Collectors.toList());
        }

        return projects;
    }

    @Override
    public Project getProjectById(Long projectId) throws Exception {
        Optional<Project> optionalProject = projectRepository.findById(projectId);
        if(optionalProject.isEmpty()) {
            throw new Exception("project not found");
        }
       return optionalProject.get();
    }

    @Override
    public void deleteProject(Long projectId, Long userId) throws Exception {
            getProjectById(projectId);
            projectRepository.deleteById(projectId);
    }

    @Override
    public Project updateProject(Project updatedProject, Long id) throws Exception {
        Project project = getProjectById(id);

        project.setName(updatedProject.getName());
        project.setDescription(updatedProject.getDescription());
        project.setTags(updatedProject.getTags());

        return projectRepository.save(project);





    }

    @Override
    public void addUserToProject(Long projectId, Long userId) throws Exception {
            Project project=getProjectById(projectId);
            User user=userService.findUserById(userId);
            for(User member:project.getTeam()){
                if(member.getId().equals(userId)){
                    return ;
                }
            }
            project.getChat().getUsers().add(user);
            project.getTeam().add(user);
            projectRepository.save(project);

    }

    @Override
    public void removeUserFromProject(Long projectId, Long userId) throws Exception {
        Project project=getProjectById(projectId);
        User user=userService.findUserById(userId);
        if(!project.getTeam().contains(user)){
            project.getChat().getUsers().remove(user);
            project.getTeam().remove(user);
        }
        projectRepository.save(project);
    }

    @Override
    public Chat getChatByProjectId(Long projectId) throws Exception {
        Project project=getProjectById(projectId);

        return project.getChat();
    }

    @Override
    public List<Project> searchProjects(String keyword, User user) throws Exception {


        return projectRepository.findByNameContainingAndTeamContains(keyword,user);
    }
}
