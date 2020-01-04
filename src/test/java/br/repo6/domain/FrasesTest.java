package br.repo6.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import br.repo6.web.rest.TestUtil;

public class FrasesTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Frases.class);
        Frases frases1 = new Frases();
        frases1.setId(1L);
        Frases frases2 = new Frases();
        frases2.setId(frases1.getId());
        assertThat(frases1).isEqualTo(frases2);
        frases2.setId(2L);
        assertThat(frases1).isNotEqualTo(frases2);
        frases1.setId(null);
        assertThat(frases1).isNotEqualTo(frases2);
    }
}
