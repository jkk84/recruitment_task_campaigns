package com.recruitment.task.campaigns.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class CampaignDto {
    private Long id;
    private String name;
    private List<String> keywords;
    private Long bidAmount;
    private Long fund;
    private Boolean status;
    private String town;
    private Long radius;
    private Long sellerId;
}
