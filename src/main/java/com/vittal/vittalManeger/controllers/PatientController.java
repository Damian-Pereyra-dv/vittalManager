package com.vittal.vittalManeger.controllers;

import com.vittal.vittalManeger.entities.Patient;
import com.vittal.vittalManeger.services.iPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/patients")
public class PatientController {

    @Autowired
    private iPatientService patientService;

    @GetMapping
    public List<Patient> getAll() {

        return patientService.getAll();
    }

    @GetMapping("/{id}")
    public Patient getById(@PathVariable String id) {

        return patientService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void remove( @PathVariable String id) {
        patientService.remove(Long.parseLong(id));
    }

    @PostMapping
    public void save( @RequestBody Patient patient) {
        patientService.save(patient);

    }

}
