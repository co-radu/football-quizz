package com.fq.game_service.dao;

import jakarta.persistence.*;

import java.util.ArrayList;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE
            }
    )
    private GameType gameType;

    @ElementCollection
    @CollectionTable(name="clueList")
    private ArrayList<Clue> clues = new ArrayList<Clue>();

    @ManyToOne
    private Jersey jersey;

    @ManyToOne
    private Player player;

    @ManyToOne
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

    public ArrayList<Clue> getClues() {
        return clues;
    }

    public void setClues(ArrayList<Clue> clues) {
        this.clues = clues;
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
