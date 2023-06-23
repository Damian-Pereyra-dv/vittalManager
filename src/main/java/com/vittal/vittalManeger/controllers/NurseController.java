package com.vittal.vittalManeger.controllers;

import com.vittal.vittalManeger.entities.Nurse;
import com.vittal.vittalManeger.entities.Patient;
import com.vittal.vittalManeger.services.iNurseService;
import com.vittal.vittalManeger.services.iPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/nurses")
public class NurseController {

    @Autowired
    private iNurseService nurseService;

    @GetMapping
    public List<Nurse> getAll() {

        return nurseService.getAll();
    }

    @GetMapping("/{id}")
    public Nurse getById(@PathVariable String id) {

        return nurseService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable String id) {
        nurseService.remove(Long.parseLong(id));
    }

    @PostMapping
    public void save(@RequestBody Nurse nurse) {
        nurseService.save(nurse);

    }
}
