package com.fq.game_service.dao;

import jakarta.persistence.*;

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

    @Column(nullable = false)
    private String response;

    @Column(nullable = false)
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
