package com.Fullstack.crowdfunding_platform.controller;

import com.Fullstack.crowdfunding_platform.exception.ResourceNotFoundException;
import com.Fullstack.crowdfunding_platform.model.Campaign;
import com.Fullstack.crowdfunding_platform.repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
public class CampaignController {

    @Autowired
    private CampaignRepository campaignRepository;

    @PostMapping("/create")
    public ResponseEntity<Campaign> createCampaign(@Valid @RequestBody Campaign campaign) {
        Campaign createdCampaign = campaignRepository.save(campaign);
        return ResponseEntity.ok(createdCampaign);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Campaign> getCampaignById(@PathVariable Long id) {
        Campaign campaign = campaignRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Campaign not found with id: " + id));
        return ResponseEntity.ok(campaign);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Campaign>> getAllCampaigns() {
        List<Campaign> campaigns = campaignRepository.findAll();
        return ResponseEntity.ok(campaigns);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Campaign> updateCampaign(@PathVariable Long id, @Valid @RequestBody Campaign updatedCampaign) {
        Campaign existingCampaign = campaignRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Campaign not found with id: " + id));

        existingCampaign.setTitle(updatedCampaign.getTitle());
        existingCampaign.setDescription(updatedCampaign.getDescription());
        existingCampaign.setFundingGoal(updatedCampaign.getFundingGoal());
        existingCampaign.setCurrentFunds(updatedCampaign.getCurrentFunds());
        existingCampaign.setEndDate(updatedCampaign.getEndDate());
        existingCampaign.setCategory(updatedCampaign.getCategory());
        // Update other campaign attributes as needed

        Campaign savedCampaign = campaignRepository.save(existingCampaign);
        return ResponseEntity.ok(savedCampaign);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCampaign(@PathVariable Long id) {
        campaignRepository.deleteById(id);
        return ResponseEntity.ok("Campaign deleted successfully");
    }
}
