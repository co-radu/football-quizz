package com.fq.game_service.dto;

import jakarta.validation.constraints.NotNull;

public class JerseyDto {

    private int id;

    @NotNull
    private String team;

    @NotNull
    private int season;

    @NotNull
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

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public int getSeason() {
        return season;
    }

    public void setSeason(int season) {
        this.season = season;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}
