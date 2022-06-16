package com.recruitment.task.campaigns.controller;

import com.recruitment.task.campaigns.model.dto.SellerDto;
import com.recruitment.task.campaigns.model.dto.SellerDto.SellerCreateDto;
import com.recruitment.task.campaigns.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/sellers")
public class SellersController {

    private final SellerService sellerService;

    @PostMapping
    private ResponseEntity<SellerDto> create(@RequestBody SellerCreateDto sellerCreateDto) {
        return sellerService.create(sellerCreateDto);
    }

    @GetMapping("/{id}")
    private ResponseEntity<SellerDto> findOne(@PathVariable long id) {
        return sellerService.findOne(id);
    }

    @GetMapping
    private ResponseEntity<List<SellerDto>> findAll() {
        return sellerService.findAll();
    }
}
