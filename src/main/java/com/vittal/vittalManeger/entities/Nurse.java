package com.vittal.vittalManeger.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name= "nurses")
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor


public class Nurse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String patient_assigned;

}
