package com.fq.game_service.dto;

import jakarta.validation.constraints.NotNull;

public class GameTypeDto {

    private int id;

    @NotNull
    private int timer;

    @NotNull
    private String label;

/*
    Getters and Setters
*/

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
}
