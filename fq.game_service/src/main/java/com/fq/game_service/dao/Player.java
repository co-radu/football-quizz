package com.fq.game_service.dao;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Player {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;

    @Column(nullable = false)
    private String lastName;

    private List<String> acceptableAnswers;

    @Column(nullable = false)
    private String pictureUrl;

    @ManyToMany
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
