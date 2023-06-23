package com.vittal.vittalManeger.repository;

import com.vittal.vittalManeger.entities.Nurse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NurseRepository extends CrudRepository <Nurse, Long> {
}
