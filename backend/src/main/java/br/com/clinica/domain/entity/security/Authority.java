package br.com.clinica.domain.entity.security;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.security.core.GrantedAuthority;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "autoridade", uniqueConstraints = {@UniqueConstraint(columnNames = {"codigo"})})
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@ToString
public class Authority implements GrantedAuthority {

    private static final long serialVersionUID = 6122669835776873667L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_autoridade")
    private Long id = null;

    @Column(name = "codigo")
    private String code;

    @Column(name = "nome")
    private String name;

    @Column(name = "descricao")
    private String description;

    @Override
    public String getAuthority() {
        return getCode();
    }

}