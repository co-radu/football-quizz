package com.fq.game_service.dto;


import com.fq.game_service.dao.GameType;
import jakarta.validation.constraints.NotNull;

public class GameDto {

    private int id;

    @NotNull
    private GameType gameType;

    @NotNull
    private String response;

    private String pictureUrl;

/*
    Getters and Setters
*/

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public GameType getGameType() {
        return gameType;
    }

    public void setGameType(GameType gameType) {
        this.gameType = gameType;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
