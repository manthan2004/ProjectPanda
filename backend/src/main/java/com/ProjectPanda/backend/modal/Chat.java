package com.ProjectPanda.backend.modal;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chats")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @OneToOne
    private Project project;

    @JsonIgnore
    @OneToMany(mappedBy ="chat" ,cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Message> messages;
//
//
//
//    @ManyToMany
//    @JoinTable(
//            name = "chat_users",
//            joinColumns = @JoinColumn(name = "chat_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
    @ManyToMany
    private List<User> users=new ArrayList<User>();

}
