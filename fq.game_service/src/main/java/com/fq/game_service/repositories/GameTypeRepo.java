package com.fq.game_service.repositories;

import com.fq.game_service.dao.GameType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameTypeRepo extends JpaRepository<GameType, Integer> {
}
