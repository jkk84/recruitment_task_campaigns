package com.recruitment.task.campaigns.model.dto;

import lombok.Data;

@Data
public class SellerDto {
    private Long id;
    private String login;
    private String email;
    private String firstName;
    private String lastName;
    private Long fund;

    @Data
    public static class SellerCreateDto {
        private String login;
        private String password;
        private String email;
        private String firstName;
        private String lastName;
        private Long fund;
    }
}
