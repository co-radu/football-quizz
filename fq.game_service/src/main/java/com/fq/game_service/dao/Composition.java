package com.fq.game_service.dao;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Composition {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(
            nullable = false,
            length = 30
    )
    private String label;

    @Column(nullable = false)
    private List<String> teamList;

    @Column(nullable = false)
    private String pictureUrl;

    @ManyToMany(cascade = {
            CascadeType.MERGE,
    })
    @JoinColumn(nullable = false)
    @JoinTable(
            name = "composition_player",
            joinColumns = @JoinColumn(name = "composition_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id")
    )
    private List<Player> playerList = new ArrayList<>();

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
