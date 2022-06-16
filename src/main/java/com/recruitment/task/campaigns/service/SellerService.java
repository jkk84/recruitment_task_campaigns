package com.recruitment.task.campaigns.service;

import com.recruitment.task.campaigns.mapper.SellerMapper;
import com.recruitment.task.campaigns.model.Seller;
import com.recruitment.task.campaigns.model.dto.SellerDto;
import com.recruitment.task.campaigns.model.dto.SellerDto.SellerCreateDto;
import com.recruitment.task.campaigns.repository.SellerRepository;
import org.mapstruct.ObjectFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class SellerService {

    private final SellerRepository sellerRepository;

    private final SellerMapper mapper;

    public SellerService(SellerRepository sellerRepository, @Lazy SellerMapper mapper) {
        this.sellerRepository = sellerRepository;
        this.mapper = mapper;
    }

    public ResponseEntity<SellerDto> create(SellerCreateDto sellerCreateDto) {
        if(sellerRepository.existsSellerByLoginOrEmail(sellerCreateDto.getLogin(), sellerCreateDto.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        } else {
            Seller seller = mapper.sellerCreateDtoToSeller(sellerCreateDto);
            sellerRepository.save(seller);
            return new ResponseEntity<>(mapper.sellerToSellerDto(seller), HttpStatus.CREATED);
        }
    }

    public ResponseEntity<SellerDto> findOne(long id) {
        Optional<Seller> seller = sellerRepository.findById(id);
        if (seller.isPresent()) {
            return ResponseEntity.ok(mapper.sellerToSellerDto(seller.get()));
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List<SellerDto>> findAll() {
        return ResponseEntity.ok(mapper.sellersToSellersDto(sellerRepository.findAll()));
    }

    @ObjectFactory
    public Seller map(@NonNull final Long id) {
        return sellerRepository.findById(id).orElse(null);
    }
}
