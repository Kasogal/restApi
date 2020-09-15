package br.com.clinica.application.service.security.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.clinica.application.service.security.UserService;
import br.com.clinica.domain.entity.security.User;
import br.com.clinica.infra.repository.security.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<User> getAll() {
        return userRepository.findAll(Sort.by(Direction.ASC, "username"));
    }

}