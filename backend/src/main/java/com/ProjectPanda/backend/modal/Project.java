package com.ProjectPanda.backend.modal;


import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ManyToAny;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    private String category;

    private List<String> tags = new ArrayList<>();

      @JsonIgnore
      @OneToOne(mappedBy = "project", cascade = CascadeType.ALL,orphanRemoval = true)
      private Chat chat;
//
    @ManyToOne
    private User owner;
//
//    @JsonIgnore
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Issue> issues = new ArrayList<>();
//
//
@ManyToMany
private List<User> team = new ArrayList<>();



}