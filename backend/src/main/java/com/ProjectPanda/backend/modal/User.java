package com.ProjectPanda.backend.modal;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String fullName;
    private String email;
    private String password;

    private String role;

    @JsonIgnore
    @OneToMany(mappedBy = "assignee", cascade = CascadeType.ALL)
    private List<Issue> assignedIssues = new ArrayList<>();


//	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
//	private Subscription subscription;

    private int projectSize;

    @JsonIgnore
    @ManyToMany(mappedBy = "team")
    private List<Project> projects = new ArrayList<>();


}

