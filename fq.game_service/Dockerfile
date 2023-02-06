FROM openjdk:19

ADD build/libs/*.jar game_service.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar", "game_service.jar"]