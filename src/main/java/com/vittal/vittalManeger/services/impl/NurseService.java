package com.vittal.vittalManeger.services.impl;

import com.vittal.vittalManeger.entities.Nurse;
import com.vittal.vittalManeger.entities.Patient;
import com.vittal.vittalManeger.repository.NurseRepository;
import com.vittal.vittalManeger.repository.PatientRepository;
import com.vittal.vittalManeger.services.iNurseService;
import com.vittal.vittalManeger.services.iPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NurseService implements iNurseService {

    @Autowired
    private NurseRepository nurseRepository;

    @Override
    public List<Nurse> getAll () {
        return (List<Nurse>) nurseRepository.findAll();
    }

    @Override
    public Nurse getById(Long id) {
        return (Nurse) nurseRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        nurseRepository.deleteById(id);
    }
    @Override
    public void save(Nurse nurse) {
        nurseRepository.save(nurse);
    }
}
