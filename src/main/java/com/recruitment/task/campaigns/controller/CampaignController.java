package com.recruitment.task.campaigns.controller;

import com.recruitment.task.campaigns.model.dto.CampaignDto;
import com.recruitment.task.campaigns.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @PostMapping("/api/v1/sellers/{sellerId}/campaigns")
    private ResponseEntity<CampaignDto> create(@PathVariable Long sellerId, @RequestBody CampaignDto campaignDto) {
        return campaignService.create(sellerId, campaignDto);
    }

    @GetMapping("/api/v1/sellers/{sellerId}/campaigns/{campaignId}")
    private ResponseEntity<CampaignDto> findOne(@PathVariable Long sellerId, @PathVariable Long campaignId) {
        return campaignService.findOne(sellerId, campaignId);
    }

    @GetMapping("/api/v1/sellers/{sellerId}/campaigns")
    private ResponseEntity<List<CampaignDto>> findAllBySellerId(@PathVariable Long sellerId) {
        return campaignService.findAllBySellerId(sellerId);
    }

    @PutMapping("/api/v1/campaigns")
    private ResponseEntity<CampaignDto> update(@RequestBody CampaignDto campaignDto) {
        return campaignService.update(campaignDto);
    }

    @DeleteMapping("/api/v1/campaigns/{id}")
    private ResponseEntity<Long> delete(@PathVariable Long id) {
        return campaignService.delete(id);
    }
}
