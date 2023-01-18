package com.fq.game_service.dto;

import com.fq.game_service.dao.Player;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public class CompositionDto {

    private int id;

    @NotNull
    private String label;

    @NotNull
    private List<String> teamList;

    @NotNull
    private String pictureUrl;

    @NotNull
    private List<Player> playerList;

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

    public List<String> getTeamList() {
        return teamList;
    }

    public void setTeamList(List<String> teamList) {
        this.teamList = teamList;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public List<Player> getPlayerList() {
        return playerList;
    }

    public void setPlayerList(List<Player> playerList) {
        this.playerList = playerList;
    }
}
