package br.repo6.domain;

import javax.persistence.*;

import java.io.Serializable;

import br.repo6.domain.enumeration.TipoVF;

/**
 * A Frases.
 */
@Entity
@Table(name = "frases")
public class Frases implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "descricao")
    private String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "verdadeira")
    private TipoVF verdadeira;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public Frases descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public TipoVF getVerdadeira() {
        return verdadeira;
    }

    public Frases verdadeira(TipoVF verdadeira) {
        this.verdadeira = verdadeira;
        return this;
    }

    public void setVerdadeira(TipoVF verdadeira) {
        this.verdadeira = verdadeira;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Frases)) {
            return false;
        }
        return id != null && id.equals(((Frases) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Frases{" +
            "id=" + getId() +
            ", descricao='" + getDescricao() + "'" +
            ", verdadeira='" + getVerdadeira() + "'" +
            "}";
    }
}
