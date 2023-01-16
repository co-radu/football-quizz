package com.fq.game_service.dto;

import com.fq.game_service.dao.Game;
import jakarta.validation.constraints.NotNull;


import java.util.List;

public class PlayerDto {

    private int id;

    private String firstName;

    @NotNull
    private String lastName;

    private List<String> acceptableAnswers;

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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<String> getAcceptableAnswers() {
        return acceptableAnswers;
    }

    public void setAcceptableAnswers(List<String> acceptableAnswers) {
        this.acceptableAnswers = acceptableAnswers;
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
