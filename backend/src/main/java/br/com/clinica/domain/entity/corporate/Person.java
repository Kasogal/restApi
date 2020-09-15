package br.com.clinica.domain.entity.corporate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.clinica.domain.entity.security.User;

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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "pessoa")
@Getter
@Setter
@ToString
public class Person implements Serializable {

    private static final long serialVersionUID = 3264903015489985824L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pessoa", updatable = false, nullable = false)
    private Long id = null;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tipo_pessoa")
    private TypePerson typePerson;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_pessoa_endereco")
    private PersonAddress personAddress;

    @Column(name = "nome")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "ddd_principal")
    private Integer ddd;

    @Column(name = "telefone_principal")
    private String telephone;

    @Column(name = "cpf")
    private String CPF;

    @Column(name = "cnpj")
    private String CNPJ;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "person", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonIgnore
    private Set<User> users = new HashSet<>();
}
