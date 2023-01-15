package com.fq.game_service.controllers;

import com.fq.game_service.dao.GameType;
import com.fq.game_service.dto.GameTypeDto;
import com.fq.game_service.repositories.GameTypeRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/game_types")
public class GameTypeController {

    @Autowired private GameTypeRepo gameTypeRepo;

    @Autowired private ModelMapper modelMapper;

    @PostMapping()
    public GameTypeDto create(@RequestBody GameTypeDto game) {
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
    public GameTypeDto getGame(@PathVariable() Integer id) {
        Optional<GameType> game = gameTypeRepo.findById(id);
        return modelMapper.map(game, GameTypeDto.class);
    }

    @PutMapping("{id}")
    public GameTypeDto update(@PathVariable Integer id, @RequestBody GameTypeDto game) {
        Optional<GameType> gameToUpdate = gameTypeRepo.findById(id);
        GameType savedUpdatedGameType = gameTypeRepo.save(modelMapper.map(game, GameType.class));
        return modelMapper.map(savedUpdatedGameType, GameTypeDto.class);
    }
    @DeleteMapping("{id}")
    public String delete(@PathVariable() Integer id) {
        gameTypeRepo.deleteById(id);
        return "Le type de jeu n°" + id +" à bien été supprimé !";
    }
}
