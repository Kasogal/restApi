package br.com.clinica.application.service.corporate;

import java.util.List;

import br.com.clinica.domain.entity.corporate.Person;

public interface PersonService {
    List<Person> getAll();
}