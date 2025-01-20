package com.CrowdFunding.Services;

import com.CrowdFunding.Models.Campaigns;
import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Models.User;
import com.CrowdFunding.Repository.CampaingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampaignServices {
    @Autowired
    private CampaingRepository campaignRepository;

    public List<Campaigns> getAllCampaigns(){
        return campaignRepository.findAll();
    }

    public Optional<Campaigns> getCamapignById(Long id){
        return campaignRepository.findById(id);
    }

    public Campaigns createCampaign(Campaigns campaigns){
        return campaignRepository.save(campaigns);
    }

    public Campaigns UpdateCampaigns(Long id, Campaigns campaignDetails){
        Optional<Campaigns> optionalcampaigns = campaignRepository.findById(id);
        if(optionalcampaigns.isPresent()){
            Campaigns campaigns = optionalcampaigns.get();
            campaigns.setTitle(campaignDetails.getTitle());
            campaigns.setDescription(campaignDetails.getDescription());;
            campaigns.setFundingGoal(campaignDetails.getFundingGoal());
            campaigns.setCurrentFunds(campaignDetails.getCurrentFunds());
            campaigns.setEndDate(campaignDetails.getEndDate());
            campaigns.setCategory(campaignDetails.getCategory());
            return campaignRepository.save(campaigns);
        }
        else{
            return null;
        }

    }

    public void deleteCampaign(Long id){
        campaignRepository.deleteById(id);
    }

    public List<Campaigns> getCampaignsByUser(User user){
        return campaignRepository.findByCreatorId(user);
    }

    public void DeleteCampaign(Long id){
        campaignRepository.deleteById(id);
    }
}
