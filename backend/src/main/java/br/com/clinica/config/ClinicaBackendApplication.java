package br.com.clinica.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = JmxAutoConfiguration.class)
@EnableJpaRepositories(basePackages = "br.com.clinica.infra.repository")
@EntityScan(basePackages = "br.com.clinica.domain.entity")
@ComponentScan(basePackages = "br.com.clinica")
public class ClinicaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClinicaBackendApplication.class, args);
	}
}
