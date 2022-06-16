package com.recruitment.task.campaigns.repository;

import com.recruitment.task.campaigns.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {

    boolean existsSellerByLoginOrEmail(String login, String email);
}