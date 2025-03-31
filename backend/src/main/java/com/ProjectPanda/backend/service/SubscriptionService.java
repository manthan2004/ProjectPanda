package com.ProjectPanda.backend.service;

import com.ProjectPanda.backend.modal.PlanType;
import com.ProjectPanda.backend.modal.Subscription;
import com.ProjectPanda.backend.modal.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);
    Subscription getUsersSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
