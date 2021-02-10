package br.com.instagrone.Instagrone.domain.repository;

import br.com.instagrone.Instagrone.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
