package com.Fullstack.crowdfunding_platform.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "campaigns")
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(name = "funding_goal", nullable = false)
    private BigDecimal fundingGoal;

    @Column(name = "current_funds", nullable = false)
    private BigDecimal currentFunds;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(nullable = false)
    private String category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User creator;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getFundingGoal() {
		return fundingGoal;
	}

	public void setFundingGoal(BigDecimal fundingGoal) {
		this.fundingGoal = fundingGoal;
	}

	public BigDecimal getCurrentFunds() {
		return currentFunds;
	}

	public void setCurrentFunds(BigDecimal currentFunds) {
		this.currentFunds = currentFunds;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

    // Constructors, getters, and setters
    
}