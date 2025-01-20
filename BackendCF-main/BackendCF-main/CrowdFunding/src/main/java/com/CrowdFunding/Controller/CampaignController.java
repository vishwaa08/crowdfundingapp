package com.CrowdFunding.Controller;

import com.CrowdFunding.Models.Campaigns;
import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Repository.ContributionRepository;
import com.CrowdFunding.Services.CampaignServices;
import com.CrowdFunding.Services.ContributionService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/campaigns")
@CrossOrigin(origins = "http://localhost:4200/")
public class CampaignController {

    @Autowired
    private CampaignServices campaignServices;

    @GetMapping("/all")
    public ResponseEntity<List<Campaigns>> getCampaigns(){
        List<Campaigns> campaigns = campaignServices.getAllCampaigns();
        if(campaigns.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(campaigns, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Campaigns> getCampaignById(@PathVariable Long id){
        Optional<Campaigns> campaigns = campaignServices.getCamapignById(id);
        return campaigns.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping()
    public ResponseEntity<Campaigns> createCampaign(@RequestBody Campaigns campaigns){
        Campaigns createdCampaigns  = campaignServices.createCampaign(campaigns);
        return  new ResponseEntity<>(createdCampaigns,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCampaign(@PathVariable Long id){
        campaignServices.deleteCampaign(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
