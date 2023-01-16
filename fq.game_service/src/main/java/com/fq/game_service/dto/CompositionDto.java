package com.fq.game_service.dto;

import com.fq.game_service.dao.Game;
import jakarta.validation.constraints.NotNull;


import java.util.List;

public class CompositionDto {

    private int id;

    @NotNull
    private String label;

    @NotNull
    private String pictureUrl;

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

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
    }
}
