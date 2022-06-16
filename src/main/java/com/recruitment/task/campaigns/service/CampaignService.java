package com.recruitment.task.campaigns.service;

import com.recruitment.task.campaigns.mapper.CampaignMapper;
import com.recruitment.task.campaigns.model.Campaign;
import com.recruitment.task.campaigns.model.Seller;
import com.recruitment.task.campaigns.model.dto.CampaignDto;
import com.recruitment.task.campaigns.repository.CampaignRepository;
import com.recruitment.task.campaigns.repository.SellerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CampaignService {

    private final CampaignRepository campaignRepository;

    private final SellerRepository sellerRepository;

    private final CampaignMapper mapper;

    @Transactional
    public ResponseEntity<CampaignDto> create(Long sellerId, CampaignDto campaignDto) {
        Optional<Seller> seller = sellerRepository.findById(sellerId);
        if(seller.isPresent()) {
            Campaign campaign = mapper.campaignDtoToCampaign(campaignDto);
            Seller sellerToSave = seller.get();
            campaign.setSeller(sellerToSave);
            campaignRepository.save(campaign);
            sellerToSave.setFund(sellerToSave.getFund() - campaign.getFund());
            sellerRepository.save(sellerToSave);
            return new ResponseEntity<>(mapper.campaignToCampaignDto(campaign), HttpStatus.CREATED);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<CampaignDto> findOne(Long sellerId, Long campaignId) {
        Optional<Campaign> campaign = campaignRepository.findBySellerIdAndId(sellerId, campaignId);
        if (campaign.isPresent()) {
            return ResponseEntity.ok(mapper.campaignToCampaignDto(campaign.get()));
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List<CampaignDto>> findAllBySellerId(Long sellerId) {
        List<Campaign> campaigns = campaignRepository.findAllBySellerId(sellerId);
        return ResponseEntity.ok(mapper.campaignsToCampaignsDto(campaigns));
    }

    @Transactional
    public ResponseEntity<CampaignDto> update(CampaignDto campaignDto) {
        Optional<Seller> seller = sellerRepository.findById(campaignDto.getSellerId());
        Optional<Campaign> campaignFromDB = campaignRepository.findById(campaignDto.getId());
        if(seller.isPresent() && campaignFromDB.isPresent()) {
            Seller sellerToSave = seller.get();
            sellerToSave.setFund(sellerToSave.getFund() + (campaignFromDB.get().getFund() - campaignDto.getFund()));
            sellerRepository.save(sellerToSave);
            Campaign campaign = mapper.campaignDtoToCampaign(campaignDto);
            campaignRepository.save(campaign);
            return ResponseEntity.ok(mapper.campaignToCampaignDto(campaign));
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    public ResponseEntity<Long> delete(Long id) {
        Optional<Campaign> campaign = campaignRepository.findById(id);
        if(campaign.isPresent()) {
            Seller seller = campaign.get().getSeller();
            seller.setFund(seller.getFund() + campaign.get().getFund());
            sellerRepository.save(seller);
        }
        campaignRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.NO_CONTENT);
    }
}
