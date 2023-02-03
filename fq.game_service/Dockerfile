FROM java:19
ADD build/libs/*.jar fq.game_service.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "fq.game_service.jar"]