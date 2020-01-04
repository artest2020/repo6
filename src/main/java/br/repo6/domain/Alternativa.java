package br.repo6.domain;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Alternativa.
 */
@Entity
@Table(name = "alternativa")
public class Alternativa implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "ordem")
    private Integer ordem;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getOrdem() {
        return ordem;
    }

    public Alternativa ordem(Integer ordem) {
        this.ordem = ordem;
        return this;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Alternativa)) {
            return false;
        }
        return id != null && id.equals(((Alternativa) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Alternativa{" +
            "id=" + getId() +
            ", ordem=" + getOrdem() +
            "}";
    }
}
