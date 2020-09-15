package br.com.clinica.domain.entity.corporate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "pessoa_endereco")
@Getter
@Setter
@ToString
public class PersonAddress implements Serializable {

    private static final long serialVersionUID = 3264903015489985824L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pessoa_endereco", updatable = false, nullable = false)
    private Long id = null;

    @Column(name = "logradouro")
    private String publicPlace;

    @Column(name = "numero")
    private String number;

    @Column(name = "codigo_postal")
    private Integer zipCode;

    @Column(name = "cidade")
    private String city;

    @Column(name = "estado")
    private String state;

}
