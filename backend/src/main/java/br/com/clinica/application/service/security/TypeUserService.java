package br.com.clinica.application.service.security;

import java.util.List;

import br.com.clinica.domain.entity.security.TypeUser;

public interface TypeUserService {
    List<TypeUser> getAll();
}