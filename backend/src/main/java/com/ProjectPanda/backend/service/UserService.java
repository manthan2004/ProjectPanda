package com.ProjectPanda.backend.service;

import com.ProjectPanda.backend.modal.User;

public interface UserService {

    public User findUserProfileByJwt(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;

    public User findUserById(Long userId) throws Exception;

    public User updateUsersProjectSize(User user,int number);

    public User saveUser(User user);

}