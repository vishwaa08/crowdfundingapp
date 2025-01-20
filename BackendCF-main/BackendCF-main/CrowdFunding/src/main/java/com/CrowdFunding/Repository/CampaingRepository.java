package com.CrowdFunding.Repository;

import com.CrowdFunding.Models.Campaigns;
import com.CrowdFunding.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CampaingRepository extends JpaRepository<Campaigns, Long> {
    Optional<Campaigns> findByTitle(String title);

    List<Campaigns> findByCreatorId(User user);
}
