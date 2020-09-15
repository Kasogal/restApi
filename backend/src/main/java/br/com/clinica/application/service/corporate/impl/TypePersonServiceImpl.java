package br.com.clinica.application.service.corporate.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.clinica.application.service.corporate.TypePersonService;
import br.com.clinica.domain.entity.corporate.TypePerson;
import br.com.clinica.infra.repository.corporate.TypePersonRepository;

@Service
public class TypePersonServiceImpl implements TypePersonService {

    @Autowired
    private TypePersonRepository typePersonRepository;

    @Override
    @Transactional(readOnly = true)
    @PreAuthorize("hasAuthority('TYPE_PERSON_READ')")
    public List<TypePerson> getAll() {
        return typePersonRepository.findAll(Sort.by(Direction.ASC, "description"));
    }
    
}