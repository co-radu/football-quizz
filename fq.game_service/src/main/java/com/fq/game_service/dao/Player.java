package com.fq.game_service.dao;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 30)
    private String firstName;

    @Column(nullable = false, length = 30)
    private String lastName;

    private List<String> acceptableAnswers;

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
}
