package com.CrowdFunding.Controller;

import com.CrowdFunding.Models.Campaigns;
import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Models.User;
import com.CrowdFunding.Repository.CampaingRepository;
import com.CrowdFunding.Repository.UserRepository;
import com.CrowdFunding.Services.CampaignServices;
import com.CrowdFunding.Services.ContributionService;
import com.CrowdFunding.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserServices userServices;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CampaingRepository campaingRepository;

    @Autowired
    private CampaignServices campaignServices;

    @Autowired
    private ContributionService contributionService;

    @GetMapping
    public ResponseEntity<List<User>> getUser(){
        List<User> users = userServices.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        Optional<User> user = userServices.findById(id);
        if(user.isPresent()){
            User user1 = user.get();
            return new ResponseEntity<>(user1,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User createdUser = userServices.createUser(user);
        return new ResponseEntity<>(createdUser,HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?>login(@RequestBody User user) {
        String userName = user.getUserName();
        String password = user.getPassword();
        Optional<User> optionalUser = userRepository.findByUserName(userName);
        if (optionalUser.isPresent()) {
            User storedUser = optionalUser.get();
            if (storedUser.getPassword().equals(password)) {
                return ResponseEntity.ok().body(storedUser);
            }
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid UserName or Password");
        }
        return null;
    }

    @GetMapping("/{userId}/campaigns")
    public ResponseEntity<List<Campaigns>> getUserCampaigns(@PathVariable Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow( ()-> new RuntimeException("User not found"));
        List<Campaigns> campaigns = campaignServices.getCampaignsByUser(user);
        return ResponseEntity.ok(campaigns);
    }

    @GetMapping("/{userId}/contributions")
    public ResponseEntity<List<Contributions>> getUserContributions(@PathVariable Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow( () -> new RuntimeException("User Not Found"));
        List<Contributions> contributions = userServices.getContributionByUser(user);
        return  ResponseEntity.ok(contributions);
    }
}
