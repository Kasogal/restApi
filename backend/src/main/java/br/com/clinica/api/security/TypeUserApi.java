package br.com.clinica.api.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.clinica.application.service.security.TypeUserService;
import br.com.clinica.domain.entity.security.TypeUser;

@RestController
@RequestMapping("/api/type-user")
public class TypeUserApi {

    @Autowired
    private TypeUserService typeUserService;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public @ResponseBody List<TypeUser> getAll() {
        return typeUserService.getAll();
    }
}