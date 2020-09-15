package br.com.clinica.application.service.security;

import java.util.List;

import br.com.clinica.domain.entity.security.User;

public interface UserService {
    List<User> getAll();
}