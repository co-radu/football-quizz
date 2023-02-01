package com.fq.game_service.controllers;

import com.fq.game_service.dao.Player;
import com.fq.game_service.dto.PlayerDto;
import com.fq.game_service.exceptions.NotFoundException;
import com.fq.game_service.repositories.PlayerRepo;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/players")
public class PlayerController {

    @Autowired private PlayerRepo playerRepo;

    @Autowired private ModelMapper modelMapper;

    private final String exceptionType = "Player";

    @PostMapping()
    public PlayerDto create(@RequestBody @Valid PlayerDto player) {
        List<String> acceptableAnswers = player.getAcceptableAnswers();
        String lastName = player.getLastName();
        if (acceptableAnswers.isEmpty()) {
            player.setAcceptableAnswers(new LinkedList<String>(
                    Collections.singletonList(lastName)
            ));
        }
        Player savedPlayer = playerRepo.save(modelMapper.map(player, Player.class));
        return modelMapper.map(savedPlayer, PlayerDto.class);
    }

    @GetMapping()
    public List<PlayerDto> getPlayerList() {
        List<Player> playerList = playerRepo.findAll();
        return playerList.stream().map(
                        player -> modelMapper.map(player, PlayerDto.class))
                .toList();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getPlayer(@PathVariable() Integer id) {
        if (playerRepo.findById(id).isPresent()) {
            Optional<Player> player = playerRepo.findById(id);
            return ResponseEntity
                    .ok(modelMapper.map(player, PlayerDto.class));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable @Valid Integer id, @RequestBody PlayerDto player) {
        if (playerRepo.findById(id).isPresent()) {
            List<String> acceptableAnswers = player.getAcceptableAnswers();
            String lastName = player.getLastName();
            if (acceptableAnswers.isEmpty()) {
                player.setAcceptableAnswers(new LinkedList<String>(
                        Collections.singletonList(lastName)
                ));
            }
            player.setId(id);
            Player playerToUpdate = modelMapper.map(player, Player.class);
            playerRepo.save(playerToUpdate);
            return ResponseEntity.ok(playerToUpdate);
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable() Integer id) {
        if (playerRepo.findById(id).isPresent()) {
            playerRepo.deleteById(id);
            return ResponseEntity
                    .ok(String.format("%s id: %s has been removed.",exceptionType, id));
        }
        return ResponseEntity
                .badRequest()
                .body(NotFoundException.NotFoundMessage(id, exceptionType));

    }
}
