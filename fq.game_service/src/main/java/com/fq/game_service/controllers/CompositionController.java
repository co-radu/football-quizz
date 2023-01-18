package com.fq.game_service.controllers;

import com.fq.game_service.dao.Composition;
import com.fq.game_service.dto.CompositionDto;
import com.fq.game_service.exceptions.NotFoundException;
import com.fq.game_service.repositories.CompositionRepo;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/compositions")
public class CompositionController {

    @Autowired private CompositionRepo compoRepo;

    @Autowired private ModelMapper modelMapper;

    private final String exceptionType = "Composition";

    @PostMapping()
    public CompositionDto create(@RequestBody @Valid CompositionDto compo) {
        Composition savedCompo = compoRepo.save(modelMapper.map(compo, Composition.class));
        return modelMapper.map(savedCompo, CompositionDto.class);
    }

    @GetMapping()
    public List<CompositionDto> getCompoList() {
        List<Composition> compoList = compoRepo.findAll();
        return compoList.stream().map(
                        compo -> modelMapper.map(compo, CompositionDto.class))
                .toList();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getCompo(@PathVariable() Integer id) {
        if (compoRepo.findById(id).isPresent()) {
            Optional<Composition> compo = compoRepo.findById(id);
            return ResponseEntity
                    .ok(modelMapper.map(compo, CompositionDto.class));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable @Valid Integer id, @RequestBody CompositionDto compo) {
        if (compoRepo.findById(id).isPresent()) {
            compo.setId(id);
            Composition compoToUpdate = modelMapper.map(compo, Composition.class);
            compoRepo.save(compoToUpdate);
            return ResponseEntity.ok(compoToUpdate);
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable() Integer id) {
        if (compoRepo.findById(id).isPresent()) {
            compoRepo.deleteById(id);
            return ResponseEntity
                    .ok(String.format("%s id: %s has been removed.",exceptionType, id));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));

    }
}
