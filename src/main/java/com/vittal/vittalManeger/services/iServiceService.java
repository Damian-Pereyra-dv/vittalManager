package com.vittal.vittalManeger.services;

import com.vittal.vittalManeger.entities.Patient;
import com.vittal.vittalManeger.entities.Service;

import java.util.List;

public interface iServiceService {

    List<Service> getAll ();
    Service getById (Long id);

    void remove(Long id);

    void save(Service service);


}
