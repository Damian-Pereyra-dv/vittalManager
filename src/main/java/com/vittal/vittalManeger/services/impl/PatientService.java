package com.vittal.vittalManeger.services.impl;

import com.vittal.vittalManeger.entities.Patient;
import com.vittal.vittalManeger.repository.PatientRepository;
import com.vittal.vittalManeger.services.iPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService implements iPatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<Patient> getAll () {
        return (List<Patient>) patientRepository.findAll();
    }

    @Override
    public Patient getById(Long id) {
        return (Patient) patientRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        patientRepository.deleteById(id);
    }
    @Override
    public void save(Patient patient) {
        patientRepository.save(patient);
    }

}
