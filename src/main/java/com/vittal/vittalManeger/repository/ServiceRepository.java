package com.vittal.vittalManeger.repository;

import com.vittal.vittalManeger.entities.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ServiceRepository extends CrudRepository <Service, Long> {
}
