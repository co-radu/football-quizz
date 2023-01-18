package com.fq.game_service.dao;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(nullable = false)
    private GameType gameType;

    @Column(nullable = false)
    private List<String> clueList;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Jersey jersey;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Player player;

    @ManyToOne(cascade = CascadeType.MERGE)
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

    public List<String> getClueList() {
        return clueList;
    }

    public void setClueList(List<String> clueList) {
        this.clueList = clueList;
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