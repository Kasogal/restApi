package br.com.clinica.api.corporate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.clinica.application.service.corporate.TypePersonService;
import br.com.clinica.domain.entity.corporate.TypePerson;

@RestController
@RequestMapping("/api/type-person")
public class TypePersonApi {

    @Autowired
    private TypePersonService typePersonService;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    public @ResponseBody List<TypePerson> getAll() {
        return typePersonService.getAll();
    }
}