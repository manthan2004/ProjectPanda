package com.ProjectPanda.backend.repository;


import java.util.List;

import com.ProjectPanda.backend.modal.Project;
import com.ProjectPanda.backend.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface ProjectRepository extends JpaRepository<Project, Long> {
//    List<Project> findByOwner(User owner);


    List<Project> findByNameContainingAndTeamContains(String partialName, User user);

//    @Query("SELECT p FROM Project p JOIN p.team t WHERE t = :user")
//    List<Project> findProjectByTeam(@Param("user") User user);

    List<Project> findByTeamContainingOrOwner(User user,User owner);

    //11.4
    int countByOwnerId(Long ownerId);

}


