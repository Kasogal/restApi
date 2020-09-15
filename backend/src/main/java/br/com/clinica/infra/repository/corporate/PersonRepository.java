package br.com.clinica.infra.repository.corporate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.clinica.domain.entity.corporate.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

}