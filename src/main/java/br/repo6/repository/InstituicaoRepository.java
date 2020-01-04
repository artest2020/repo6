package br.repo6.repository;

import br.repo6.domain.Instituicao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Instituicao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InstituicaoRepository extends JpaRepository<Instituicao, Long> {

}
