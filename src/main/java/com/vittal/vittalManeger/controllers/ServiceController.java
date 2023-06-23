package com.vittal.vittalManeger.controllers;
import com.vittal.vittalManeger.entities.Service;
import com.vittal.vittalManeger.services.iServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/services")
public class ServiceController {
    @Autowired
    private iServiceService ServiceService;

    @GetMapping
    public List<Service> getAll() {

        return ServiceService.getAll();
    }

    @GetMapping("/{id}")
    public Service getById(@PathVariable String id) {

        return ServiceService.getById(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void remove( @PathVariable String id) {
        ServiceService.remove(Long.parseLong(id));
    }

    @PostMapping
        public void save( @RequestBody Service service) {
        ServiceService.save(service);

    }
}
