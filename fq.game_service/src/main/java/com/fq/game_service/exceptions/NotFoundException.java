package com.fq.game_service.exceptions;

public class NotFoundException {

    public static String NotFoundMessage(int objectId, String exceptionType) {
        return String.format("Failed for : %s id: %s not found.", exceptionType, objectId);
    }
}
