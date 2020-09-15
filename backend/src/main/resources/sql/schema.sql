CREATE TABLE IF NOT EXISTS oauth_client_details (
  client_id VARCHAR(256) PRIMARY KEY,
  resource_ids VARCHAR(256),
  client_secret VARCHAR(256) NOT NULL,
  scope VARCHAR(256),
  authorized_grant_types VARCHAR(256),
  web_server_redirect_uri VARCHAR(256),
  authorities VARCHAR(256),
  access_token_validity INTEGER,
  refresh_token_validity INTEGER,
  additional_information VARCHAR(4000),
  autoapprove VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS oauth_client_token (
  token_id VARCHAR(256),
  token  bytea,
  authentication_id VARCHAR(256) PRIMARY KEY,
  user_name VARCHAR(256),
  client_id VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS oauth_access_token (
  token_id VARCHAR(256),
  token bytea,
  authentication_id VARCHAR(256),
  user_name VARCHAR(256),
  client_id VARCHAR(256),
  authentication bytea,
  refresh_token VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS oauth_refresh_token (
  token_id VARCHAR(256),
  token bytea,
  authentication bytea
);

CREATE TABLE IF NOT EXISTS oauth_code (
  code VARCHAR(256), authentication bytea
);


-- The encrypted client_secret it `secret`
INSERT INTO oauth_client_details (client_id, client_secret, scope, authorized_grant_types, authorities, access_token_validity)
  VALUES ('clientId', '{bcrypt}$2a$10$vCXMWCn7fDZWOcLnIEhmK.74dvK1Eh8ae2WrWlhr2ETPLoxQctN4.', 'read,write', 'password,refresh_token,client_credentials', 'ROLE_CLIENT', 300);
  
INSERT INTO tipo_pessoa (id_tipo_pessoa, ativo, codigo, descricao) VALUES (1, true, 'PF', 'Pessoa Fisica');
INSERT INTO tipo_pessoa (id_tipo_pessoa, ativo, codigo, descricao) VALUES (2, true, 'PJ', 'Pessoa Juridica');
INSERT INTO tipo_pessoa (id_tipo_pessoa, ativo, codigo, descricao) VALUES (3, true, 'GOV', 'Governo');

INSERT INTO tipo_usuario (id_tipo_usuario, ativo, codigo, descricao) VALUES (1, true, 'ADM', 'Administrador');
INSERT INTO tipo_usuario (id_tipo_usuario, ativo, codigo, descricao) VALUES (2, true, 'MED', 'Médico');
INSERT INTO tipo_usuario (id_tipo_usuario, ativo, codigo, descricao) VALUES (3, true, 'OPE', 'Operador');

INSERT INTO pessoa (id_pessoa, cnpj, cpf, ddd_principal, telefone_principal, email, id_tipo_pessoa, nome)
	VALUES (1, NULL, '11111111111',  62, 999999999, 'adm@clinica.com.br', 1, 'Usuário Adm')

  -- The encrypted password is `pass`
INSERT INTO usuario (id_usuario, ativo, bloqueado, email, expirado, senha, nome_usuario, id_pessoa, id_tipo_usuario) 
	VALUES (1, true, false, 'adm@clinica.com.br', false, '{bcrypt}$2a$10$cyf5NfobcruKQ8XGjUJkEegr9ZWFqaea6vjpXWEaSqTa2xL9wjgQC', 'adm', 1, 1);
INSERT INTO autoridade (id_autoridade, codigo, descricao, nome) 
	VALUES (1, 'ROLE_USER', 'Descrição do acesso', 'Acesso básico de usuário');
	
INSERT INTO usuario_autoridade (id_usuario, id_autoridade) VALUES (1,1);
