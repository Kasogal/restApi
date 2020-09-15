package br.com.clinica.infra.repository.security;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.clinica.domain.entity.security.Authority;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long>{
    
}