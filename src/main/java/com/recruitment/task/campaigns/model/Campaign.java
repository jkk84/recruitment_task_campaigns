package com.recruitment.task.campaigns.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ElementCollection
    private List<String> keywords;

    private Long bidAmount;

    private Long fund;

    @Column(columnDefinition = "boolean default false")
    private Boolean status;

    private String town;

    private Long radius;

    @ManyToOne
    private Seller seller;
}
