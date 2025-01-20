package com.CrowdFunding.Repository;

import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContributionRepository extends JpaRepository<Contributions, Long> {
    Optional<List<Contributions>> findAllById(Long id);

    List<Contributions> findContributionByBaker(User user);
}
