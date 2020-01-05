package br.repo6.repository;

import br.repo6.domain.Frase;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Frase entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FraseRepository extends JpaRepository<Frase, Long> {

}
