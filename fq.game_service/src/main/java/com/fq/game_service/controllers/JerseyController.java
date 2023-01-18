package com.fq.game_service.controllers;

import com.fq.game_service.dao.Jersey;
import com.fq.game_service.dto.JerseyDto;
import com.fq.game_service.exceptions.NotFoundException;
import com.fq.game_service.repositories.JerseyRepo;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/jerseys")
public class JerseyController {

    @Autowired private JerseyRepo jerseyRepo;

    @Autowired private ModelMapper modelMapper;

    private final String exceptionType = "Jersey";

    @PostMapping()
    public JerseyDto create(@RequestBody @Valid JerseyDto jersey) {
        Jersey savedJersey = jerseyRepo.save(modelMapper.map(jersey, Jersey.class));
        return modelMapper.map(savedJersey, JerseyDto.class);
    }

    @GetMapping()
    public List<JerseyDto> getJerseyList() {
        List<Jersey> jerseyList = jerseyRepo.findAll();
        return jerseyList.stream().map(
                        jersey -> modelMapper.map(jersey, JerseyDto.class))
                .toList();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getJersey(@PathVariable() Integer id) {
        if (jerseyRepo.findById(id).isPresent()) {
            Optional<Jersey> jersey = jerseyRepo.findById(id);
            return ResponseEntity
                    .ok(modelMapper.map(jersey, JerseyDto.class));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable @Valid Integer id, @RequestBody JerseyDto jersey) {
        if (jerseyRepo.findById(id).isPresent()) {
            jersey.setId(id);
            Jersey jerseyToUpdate = modelMapper.map(jersey, Jersey.class);
            jerseyRepo.save(jerseyToUpdate);
            return ResponseEntity.ok(jerseyToUpdate);
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable() Integer id) {
        if (jerseyRepo.findById(id).isPresent()) {
            jerseyRepo.deleteById(id);
            return ResponseEntity
                    .ok(String.format("%s id: %s has been removed.",exceptionType, id));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));

    }
}
