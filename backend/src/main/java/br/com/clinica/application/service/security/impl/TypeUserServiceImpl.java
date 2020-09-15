package br.com.clinica.application.service.security.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.clinica.application.service.security.TypeUserService;
import br.com.clinica.domain.entity.security.TypeUser;
import br.com.clinica.infra.repository.security.TypeUserRepository;

@Service
public class TypeUserServiceImpl implements TypeUserService {

    @Autowired
    private TypeUserRepository typeUserRepository;

    @Override
    @Transactional(readOnly = true)
    public List<TypeUser> getAll() {
        return typeUserRepository.findAll(Sort.by(Direction.ASC, "description"));
    }
    
}