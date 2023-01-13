package com.fq.game_service.models;

import com.fq.game_service.dao.Game;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class GameType {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private int timer;
    @Column(nullable = false, length = 30)
    private String label;

    @OneToMany()
    private List<Game> games;

    public GameType() {
    }

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
