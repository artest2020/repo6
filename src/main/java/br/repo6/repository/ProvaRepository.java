package br.repo6.repository;

import br.repo6.domain.Prova;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Prova entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProvaRepository extends JpaRepository<Prova, Long> {

}
