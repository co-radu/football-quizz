package com.fq.game_service.controllers;

import com.fq.game_service.dao.Game;
import com.fq.game_service.dto.GameDto;
import com.fq.game_service.exceptions.NotFoundException;
import com.fq.game_service.repositories.GameRepo;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@ResponseBody
@RestController
@RequestMapping("/games")
public class GameController {
    @Autowired private GameRepo gameRepo;

    @Autowired private ModelMapper modelMapper;

    private final String exceptionType = "Game";

    @PostMapping()
    public GameDto create(@RequestBody @Valid GameDto game) {
        Game savedGame = gameRepo.save(modelMapper.map(game, Game.class));
        return modelMapper.map(savedGame, GameDto.class);
    }

    @GetMapping()
    public List<GameDto> getGameList() {
        List<Game> gameList = gameRepo.findAll();
        return gameList.stream().map(
                        game -> modelMapper.map(game, GameDto.class))
                .toList();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getGame(@PathVariable() Integer id) {
        if (gameRepo.findById(id).isPresent()) {
            Optional<Game> game = gameRepo.findById(id);
            return ResponseEntity
                    .ok(modelMapper.map(game, GameDto.class));

        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable @Valid Integer id, @RequestBody GameDto game) {
        if (gameRepo.findById(id).isPresent()) {
            Optional<Game> gameToUpdate = gameRepo.findById(id);
            Game savedUpdatedGame = gameRepo.save(modelMapper.map(game, Game.class));
            return ResponseEntity
                    .ok(modelMapper.map(savedUpdatedGame, GameDto.class));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable() Integer id) {
        if (gameRepo.findById(id).isPresent()) {
            gameRepo.deleteById(id);
            return ResponseEntity
                    .ok(String.format("%s id: %s has been removed.",exceptionType, id));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));

    }
}
