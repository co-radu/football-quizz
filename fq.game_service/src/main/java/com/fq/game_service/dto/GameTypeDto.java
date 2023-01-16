package com.fq.game_service.dto;

import com.fq.game_service.dao.Game;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public class GameTypeDto {

    private int id;

    private int timer;

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

    public int getTimer() {
        return timer;
    }

    public void setTimer(int timer) {
        this.timer = timer;
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
