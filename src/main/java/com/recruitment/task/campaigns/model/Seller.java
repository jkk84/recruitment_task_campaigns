package com.recruitment.task.campaigns.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, updatable = false)
    private String login;

    private String password;

    @Column(unique = true)
    private String email;

    private String firstName;

    private String lastName;

    private Long fund;
}
