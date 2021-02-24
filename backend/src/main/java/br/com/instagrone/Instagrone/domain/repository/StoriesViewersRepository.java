package br.com.instagrone.Instagrone.domain.repository;

import br.com.instagrone.Instagrone.domain.model.StoriesViewers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoriesViewersRepository extends JpaRepository<StoriesViewers, Long> {
}
