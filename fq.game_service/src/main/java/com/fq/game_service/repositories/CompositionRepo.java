package com.fq.game_service.repositories;

import com.fq.game_service.dao.Composition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompositionRepo extends JpaRepository<Composition, Integer> {
}
