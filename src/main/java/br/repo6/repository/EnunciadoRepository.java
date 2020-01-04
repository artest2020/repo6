package br.repo6.repository;

import br.repo6.domain.Enunciado;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Enunciado entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EnunciadoRepository extends JpaRepository<Enunciado, Long> {

}
