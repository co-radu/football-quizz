package com.fq.game_service.controllers;

import com.fq.game_service.dao.GameType;
import com.fq.game_service.dto.GameTypeDto;
import com.fq.game_service.exceptions.NotFoundException;
import com.fq.game_service.repositories.GameTypeRepo;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/game_types")
public class GameTypeController {

    @Autowired private GameTypeRepo gameTypeRepo;

    @Autowired private ModelMapper modelMapper;

    @PostMapping()
    public GameTypeDto create(@RequestBody @Valid GameTypeDto game) {
        GameType savedGameType = gameTypeRepo.save(modelMapper.map(game, GameType.class));
        return modelMapper.map(savedGameType, GameTypeDto.class);
    }

    @GetMapping()
    public List<GameTypeDto> getGameList() {
        List<GameType> gameTypeList = gameTypeRepo.findAll();
        return gameTypeList.stream().map(
                        gameType -> modelMapper.map(gameType, GameTypeDto.class))
                .toList();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getGame(@PathVariable() Integer id) {
        if (gameTypeRepo.findById(id).isPresent()) {
            Optional<GameType> gameType = gameTypeRepo.findById(id);
            return ResponseEntity
                    .ok(modelMapper.map(gameType, GameTypeDto.class));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, "Game type"));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable @Valid Integer id, @RequestBody GameTypeDto gameType) {
        if (gameTypeRepo.findById(id).isPresent()) {
            gameType.setId(id);
            GameType gameTypeToUpdate = modelMapper.map(gameType, GameType.class);
            gameTypeRepo.save(gameTypeToUpdate);
            return ResponseEntity.ok(gameTypeToUpdate);
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, "Game type"));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable() Integer id) {
        if (gameTypeRepo.findById(id).isPresent()) {
            gameTypeRepo.deleteById(id);
            return ResponseEntity
                    .ok(String.format("Game type id: %s has been removed.", id));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, "Game type"));

    }
}
