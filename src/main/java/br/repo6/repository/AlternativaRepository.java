package br.repo6.repository;

import br.repo6.domain.Alternativa;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Alternativa entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlternativaRepository extends JpaRepository<Alternativa, Long> {

}
