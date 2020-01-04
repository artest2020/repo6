package br.repo6.repository;

import br.repo6.domain.Questao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Questao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QuestaoRepository extends JpaRepository<Questao, Long> {

}
