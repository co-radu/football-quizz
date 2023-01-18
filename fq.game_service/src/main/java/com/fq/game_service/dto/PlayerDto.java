package com.fq.game_service.dto;

import jakarta.validation.constraints.NotNull;

import java.util.LinkedList;
import java.util.List;

public class PlayerDto {

    private int id;

    private String firstName;

    @NotNull
    private String lastName;

    private List<String> acceptableAnswers = new LinkedList<String>();

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
