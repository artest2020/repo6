package br.repo6.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import br.repo6.web.rest.TestUtil;

public class PerguntaTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Pergunta.class);
        Pergunta pergunta1 = new Pergunta();
        pergunta1.setId(1L);
        Pergunta pergunta2 = new Pergunta();
        pergunta2.setId(pergunta1.getId());
        assertThat(pergunta1).isEqualTo(pergunta2);
        pergunta2.setId(2L);
        assertThat(pergunta1).isNotEqualTo(pergunta2);
        pergunta1.setId(null);
        assertThat(pergunta1).isNotEqualTo(pergunta2);
    }
}
