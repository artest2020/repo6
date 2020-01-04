package br.repo6.repository;

import br.repo6.domain.Frases;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Frases entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FrasesRepository extends JpaRepository<Frases, Long> {

}
