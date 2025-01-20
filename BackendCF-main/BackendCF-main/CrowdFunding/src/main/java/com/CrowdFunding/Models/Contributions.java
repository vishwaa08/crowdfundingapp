package com.CrowdFunding.Models;


import jakarta.persistence.*;
import org.springframework.http.HttpStatusCode;

import java.math.BigInteger;

@Entity
public class Contributions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigInteger amount;

    @ManyToOne
    @JoinColumn(name="backer_id", nullable = false)
    private User baker;

    @ManyToOne
    @JoinColumn(name = "campaign_id", nullable = false)
    private Campaigns campaigns;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigInteger getAmount() {
        return amount;
    }

    public void setAmount(BigInteger amount) {
        this.amount = amount;
    }

    public User getBaker() {
        return baker;
    }

    public void setBaker(User baker) {
        this.baker = baker;
    }

    public Campaigns getCampaigns() {
        return campaigns;
    }

    public void setCampaigns(Campaigns campaigns) {
        this.campaigns = campaigns;
    }

    public Contributions(Long id, BigInteger amount, User baker, Campaigns campaigns) {
        this.id = id;
        this.amount = amount;
        this.baker = baker;
        this.campaigns = campaigns;
    }

    public Contributions() {
    }
}
