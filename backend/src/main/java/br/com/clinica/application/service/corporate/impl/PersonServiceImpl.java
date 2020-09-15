package br.com.clinica.application.service.corporate.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.clinica.application.service.corporate.PersonService;
import br.com.clinica.commons.SecurityUtil;
import br.com.clinica.domain.entity.corporate.Person;
import br.com.clinica.infra.repository.corporate.PersonRepository;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    @Transactional(readOnly = true)
    @PreAuthorize("hasAuthority('PERSON_READ')")
    public List<Person> getAll() {
        SecurityUtil.makeHasAuthority("","");
        return personRepository.findAll(Sort.by(Direction.ASC, "name"));
    }
    
}