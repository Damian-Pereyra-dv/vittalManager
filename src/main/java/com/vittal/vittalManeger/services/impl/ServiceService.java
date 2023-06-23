package com.vittal.vittalManeger.services.impl;


import com.vittal.vittalManeger.entities.Nurse;
import com.vittal.vittalManeger.entities.Patient;
import com.vittal.vittalManeger.repository.PatientRepository;
import com.vittal.vittalManeger.repository.ServiceRepository;
import com.vittal.vittalManeger.services.iPatientService;
import com.vittal.vittalManeger.services.iServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceService implements iServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public List<com.vittal.vittalManeger.entities.Service> getAll() {
        return (List<com.vittal.vittalManeger.entities.Service>) serviceRepository.findAll();
    }

    @Override
    public com.vittal.vittalManeger.entities.Service getById(Long id) {
        return (com.vittal.vittalManeger.entities.Service) serviceRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        serviceRepository.deleteById(id);
    }

    @Override
    public void save(com.vittal.vittalManeger.entities.Service service) {
        serviceRepository.save(service);
    }

}
