package com.fq.game_service.dto;


import com.fq.game_service.dao.*;

import java.util.List;

public class GameDto {

    private int id;

    private GameType gameType;

    private List<String> clueList;

    private Jersey jersey;

    private Player player;

    private Composition composition;

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

    public List<String> getClues() {
        return clueList;
    }

    public void setClues(List<String> clues) {
        this.clueList = clues;
    }

    public Jersey getJersey() {
        return jersey;
    }

    public void setJersey(Jersey jersey) {
        this.jersey = jersey;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Composition getComposition() {
        return composition;
    }

    public void setComposition(Composition composition) {
        this.composition = composition;
    }
}
