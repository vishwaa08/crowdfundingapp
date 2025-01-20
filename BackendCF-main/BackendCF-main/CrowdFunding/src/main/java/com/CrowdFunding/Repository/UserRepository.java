package com.CrowdFunding.Repository;

import com.CrowdFunding.Models.Campaigns;
import com.CrowdFunding.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByUserName(String name);

}
