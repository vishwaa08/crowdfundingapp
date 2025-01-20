package com.CrowdFunding.Models;

import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Entity
public class Campaigns {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String description;

    private BigInteger fundingGoal;

    private BigInteger currentFunds;

    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User creatorId;

    private String category;

    private String imageUrl;

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setFundingGoal(BigInteger fundingGoal) {
        this.fundingGoal = fundingGoal;
    }

    public void setCurrentFunds(BigInteger currentFunds) {
        this.currentFunds = currentFunds;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setCreatorId(User creatorId) {
        this.creatorId = creatorId;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Campaigns() {
    }

    public Campaigns(long id, String title, String description, BigInteger fundingGoal, LocalDate endDate, BigInteger currentFunds, String category, User creatorId, String imageUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.fundingGoal = fundingGoal;
        this.endDate = endDate;
        this.currentFunds = currentFunds;
        this.category = category;
        this.creatorId = creatorId;
        this.imageUrl = imageUrl;
    }
}
