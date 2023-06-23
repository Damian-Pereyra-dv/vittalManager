package com.vittal.vittalManeger.services;

import com.vittal.vittalManeger.entities.Nurse;
import com.vittal.vittalManeger.entities.Patient;

import java.util.List;

public interface iNurseService {
    List<Nurse> getAll ();
    Nurse getById (Long id);

    void remove(Long id);

    void save(Nurse nurse);


}
