package com.recruitment.task.campaigns.repository;

import com.recruitment.task.campaigns.model.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CampaignRepository extends JpaRepository<Campaign, Long> {

    Optional<Campaign> findBySellerIdAndId(Long sellerId, Long campaignId);

    List<Campaign> findAllBySellerId(Long sellerId);
}