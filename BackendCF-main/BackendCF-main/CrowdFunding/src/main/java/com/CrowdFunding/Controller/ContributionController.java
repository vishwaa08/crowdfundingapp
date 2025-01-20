package com.CrowdFunding.Controller;

import com.CrowdFunding.Models.Contributions;
import com.CrowdFunding.Services.ContributionService;
import org.apache.catalina.startup.ContextRuleSet;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contributions")
@CrossOrigin(origins = "http://localhost:4200/")
public class ContributionController {

    @Autowired
    private ContributionService contributionService;

    @GetMapping
    public ResponseEntity<List<Contributions>> getAllContribution(){
        List<Contributions> contributions = contributionService.getAllContributions();
        return new ResponseEntity<>(contributions, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Contributions>> getContributionsById(@PathVariable Long id){
        Optional<List<Contributions>> optionalContribution = contributionService.getContributionsById(id);
        if(optionalContribution.isPresent()){
            List<Contributions> contributions = optionalContribution.get();
            return new ResponseEntity<>(contributions,HttpStatus.OK);
        }
        return null;
    }

    @PostMapping()
    public ResponseEntity<Contributions> createContribution(@RequestBody Contributions contribution){
        Contributions createdContribution = contributionService.createContribution(contribution);
        return new ResponseEntity<>(createdContribution,HttpStatus.CREATED);
    }

}
