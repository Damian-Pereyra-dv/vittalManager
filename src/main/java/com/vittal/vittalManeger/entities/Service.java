package com.vittal.vittalManeger.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name= "services")
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor


public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String service;
    private String difficulty;
    private String price;



}
