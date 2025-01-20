package com.CrowdFunding.Services;

import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Models.User;
import com.CrowdFunding.Repository.ContributionRepository;
import com.CrowdFunding.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContributionRepository contributionRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUser(Long id, User userDetails) {
        Optional<User> optionalUser = findById(id);
        User user = optionalUser.get();
        if (optionalUser.isPresent()) {
            user.setUserName(userDetails.getUserName());
            user.setPassword(userDetails.getPassword());
            user.setPassword(userDetails.getPassword());
            return user;
        } else {
            return null;
        }
    }

    public Optional<User> findByUsername(String name) {
        return userRepository.findByUserName(name);
    }

    public List<Contributions> getContributionByUser(User user) {
        return contributionRepository.findContributionByBaker(user);
    }
}
