package br.com.clinica.domain.entity.security;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Collection;
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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tipo_usuario")
@Getter
@Setter
public class TypeUser implements Serializable {

    private static final long serialVersionUID = -7081617505117816325L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo_usuario", updatable = false, nullable = false)
    private Long id = null;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.REFRESH, mappedBy = "typeUser", fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<User> users = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "tipo_usuario_autoridade", 
                joinColumns = @JoinColumn(name = "id_tipo_usuario", referencedColumnName = "id_tipo_usuario"), 
                inverseJoinColumns = @JoinColumn(name = "id_autoridade", referencedColumnName = "id_autoridade"))
    @OrderBy
    @JsonIgnore
    private Collection<Authority> authorities;

    @Column(name = "codigo")
    private String code;

    @Column(name = "descricao")
    private String description;

    @Column(name = "ativo")
    private Boolean active;

    public void setAuthoritys(Set<Authority> authorities) {
        this.authorities.clear();
        if (authorities != null) {
            this.authorities.addAll(authorities);
        }
    }

    public void setUsers(Set<User> users) {
        this.users.clear();
        if (users != null) {
            this.users.addAll(users);
        }
    }
}