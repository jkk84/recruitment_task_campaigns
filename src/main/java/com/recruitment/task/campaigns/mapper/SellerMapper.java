package com.recruitment.task.campaigns.mapper;

import com.recruitment.task.campaigns.model.Seller;
import com.recruitment.task.campaigns.model.dto.SellerDto;
import com.recruitment.task.campaigns.model.dto.SellerDto.SellerCreateDto;
import com.recruitment.task.campaigns.service.SellerService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {SellerService.class})
public interface SellerMapper {

    Seller sellerCreateDtoToSeller(SellerCreateDto sellerCreateDto);

    SellerDto sellerToSellerDto(Seller seller);

    List<SellerDto> sellersToSellersDto(List<Seller> sellers);

    Seller sellerIdToSeller(Long sellerId);
}
