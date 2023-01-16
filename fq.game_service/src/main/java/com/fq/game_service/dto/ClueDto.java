package com.fq.game_service.dto;

import com.fq.game_service.dao.Game;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public class ClueDto {

    private int id;

    @NotNull
    private String label;

    private List<Game> games;

/*
    Getters and Setters
*/

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
    }
}
