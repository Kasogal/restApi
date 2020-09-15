package br.com.clinica.domain.entity.corporate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tipo_pessoa")
@Getter
@Setter
public class TypePerson implements Serializable {

    private static final long serialVersionUID = -1613210859204811472L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo_pessoa", updatable = false, nullable = false)
    private Long id = null;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "typePerson", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private Set<Person> persons = new HashSet<>();

    @Column(name = "codigo")
    private String code;

    @Column(name = "descricao")
    private String description;

    @Column(name = "ativo")
    private Boolean active;

    public void setPersons(Set<Person> persons) {
        this.persons.clear();
        if (persons != null) {
            this.persons.addAll(persons);
        }
    }
}