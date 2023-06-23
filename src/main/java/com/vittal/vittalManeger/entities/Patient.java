package com.vittal.vittalManeger.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name= "patients")
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor


public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String age;
    private String email;
    private String phone;
    private String address;
    private String service;


}
