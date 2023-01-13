package com.fq.game_service.controllers;

import com.fq.game_service.dao.Game;
import com.fq.game_service.dto.GameDto;
import com.fq.game_service.repositories.GameRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/games")
public class GameController {
    @Autowired private GameRepository gameRepo;

    @Autowired private ModelMapper modelMapper;

    @PostMapping()
    public GameDto create(@RequestBody GameDto game) {
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
    public GameDto getGame(@PathVariable() Integer id) {
        Optional<Game> game = gameRepo.findById(id);
        return modelMapper.map(game, GameDto.class);
    }

    @PutMapping("{id}")
    public GameDto update(@PathVariable Integer id, @RequestBody GameDto game) {
        Optional<Game> gameToUpdate = gameRepo.findById(id);
        Game savedUpdatedGame = gameRepo.save(modelMapper.map(game, Game.class));
        return modelMapper.map(savedUpdatedGame, GameDto.class);
    }
    @DeleteMapping("{id}")
    public String delete(@PathVariable() Integer id) {
        gameRepo.deleteById(id);
        return "Le jeu n°" + id +" à bien été supprimé !";
    }
}
