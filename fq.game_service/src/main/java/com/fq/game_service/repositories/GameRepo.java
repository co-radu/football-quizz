package com.fq.game_service.repositories;

import com.fq.game_service.dao.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepo extends JpaRepository<Game, Integer> {
}
