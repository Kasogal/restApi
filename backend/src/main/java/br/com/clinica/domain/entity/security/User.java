package br.com.clinica.domain.entity.security;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.security.core.userdetails.UserDetails;

import br.com.clinica.domain.entity.corporate.Person;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "usuario", uniqueConstraints = { @UniqueConstraint(columnNames = { "nome_usuario" }) })
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@ToString
public class User implements UserDetails, Serializable {

    private static final long serialVersionUID = -263640888120707589L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tipo_usuario")
    private TypeUser typeUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_pessoa")
    private Person person;

    @Column(name = "nome_usuario")
    private String username;

    @Column(name = "email")
    private String email;

    @JsonIgnore
    @Column(name = "senha")
    private String password;

    @Column(name = "expirado")
    private Boolean expired;

    @Column(name = "bloqueado")
    private Boolean blocked;

    @Column(name = "ativo")
    private Boolean active;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usuario_autoridade", 
                joinColumns = @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario"), 
                inverseJoinColumns = @JoinColumn(name = "id_autoridade", referencedColumnName = "id_autoridade"))
    @OrderBy
    private Collection<Authority> authorities;

    @Override
    public boolean isAccountNonExpired() {
        return !getExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return getActive();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return !getExpired();
    }

    @Override
    public boolean isEnabled() {
        return getActive();
    }
}