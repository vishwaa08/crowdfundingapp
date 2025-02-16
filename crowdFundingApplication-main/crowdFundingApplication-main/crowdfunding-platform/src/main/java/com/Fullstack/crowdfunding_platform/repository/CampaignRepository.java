package com.Fullstack.crowdfunding_platform.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Fullstack.crowdfunding_platform.model.Campaign;

@Repository
public interface CampaignRepository extends JpaRepository<Campaign, Long> {

	Optional<Campaign> findById(Long id);
    // You can define custom query methods here if needed

	void deleteById(Long id);
}