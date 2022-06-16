package com.recruitment.task.campaigns.mapper;

import com.recruitment.task.campaigns.model.Campaign;
import com.recruitment.task.campaigns.model.dto.CampaignDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {SellerMapper.class})
public interface CampaignMapper {

    @Mapping(source = "sellerId", target = "seller")
    Campaign campaignDtoToCampaign(CampaignDto campaignDto);

    @Mapping(source = "seller.id", target = "sellerId")
    CampaignDto campaignToCampaignDto(Campaign campaign);

    List<CampaignDto> campaignsToCampaignsDto(List<Campaign> campaigns);
}
