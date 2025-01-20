package com.CrowdFunding.Services;

import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Models.User;
import com.CrowdFunding.Repository.ContributionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContributionService {

    @Autowired
    private ContributionRepository contributionRepository;

    public List<Contributions> getAllContributions(){
        return contributionRepository.findAll();
    }

    public Optional<List<Contributions>> getContributionsById(Long id){
        return contributionRepository.findAllById(id);
    }

    public Contributions createContribution(Contributions contributions){
        return contributionRepository.save(contributions);
    }

    public Contributions updteContribution(Long id, Contributions contributionDetails){
        Optional<Contributions> optionalContributions = contributionRepository.findById(id);
        if(optionalContributions.isPresent()){
            Contributions contrubution = optionalContributions.get();
            contrubution.setAmount(contributionDetails.getAmount());
            return contributionRepository.save(contrubution);
        }
        else{
            return null;
        }
    }

    public void deleteContribution(Long id){
        contributionRepository.deleteById(id);
    }


}
