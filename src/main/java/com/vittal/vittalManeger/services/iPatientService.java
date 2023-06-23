package com.vittal.vittalManeger.services;

import com.vittal.vittalManeger.entities.Patient;

import java.util.List;

public interface iPatientService {
     List<Patient> getAll ();
     Patient getById (Long id);

     void remove(Long id);

     void save(Patient patient);
}

