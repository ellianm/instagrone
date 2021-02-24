package br.com.instagrone.Instagrone.domain.repository;

import br.com.instagrone.Instagrone.domain.model.Stories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoriesRepository extends JpaRepository<Stories, Long> {
}
