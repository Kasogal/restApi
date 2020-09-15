/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Navbar,
  Button,
  UncontrolledTooltip,
  Row,
  Col,
  Container,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TOGGLE_MENU } from './sidebar.actionsTypes';
import { SidebarToggle } from './sidebar.reducer';

class Sidebar extends Component {
  render() {
    debugger;
    let classMenu = 'navbar-collapse-header';
    if (this.props.show === true) {
      classMenu = 'navbar-expand-md';
    }
    const finalClassMenu = `navbar-vertical fixed-left navbar-light bg-white menu-vertical ${classMenu}`;
    return (
      <Navbar className={finalClassMenu} id="sidenav-main">
        <Container fluid>
          <Row className="min-with-100">
            <Col className="col-sm" sm={12}>
              <h5 className="text-uppercase font-weight-bold border-botton">
                <i className="fa fa-desktop" /> Modulos
              </h5>
            </Col>
          </Row>
          <Row className="min-with-100 flex-nowrap">
            <Col sm={3}>
              <Button
                className="btn-icon btn-2"
                color="default"
                type="button"
                id="btn-adm"
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-circle-08 text-white" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} placement="top" target="btn-adm">
                Administração
              </UncontrolledTooltip>
            </Col>
            <Col sm={3}>
              <Button
                className="btn-icon btn-2"
                color="secudary"
                type="button"
                id="btn-attendance"
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-calendar-grid-58 text-blue" />
                </span>
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="btn-attendance"
              >
                Atendimento Recepção
              </UncontrolledTooltip>
            </Col>
            <Col sm={3}>
              <Button
                className="btn-icon btn-2"
                color="secundary"
                type="button"
                id="btn-medical"
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-badge text-blue" />
                </span>
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="btn-medical"
              >
                Atendimento Médico
              </UncontrolledTooltip>
            </Col>
            <Col sm={3}>
              <Button
                className="btn-icon btn-2"
                color="secundary"
                type="button"
                id="btn-dashboard"
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-collection text-blue" />
                </span>
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="btn-dashboard"
              >
                Relatórios
              </UncontrolledTooltip>
            </Col>
          </Row>
          <Row className="w-100">&nbsp;</Row>
          <Row className="min-with-100">
            <Col className="col-sm" sm={12}>
              <h5 className="text-uppercase font-weight-bold border-botton">
                <i className="ni ni-circle-08" /> Menu - Administração
              </h5>
            </Col>
          </Row>
          <Row className="min-with-100">
            <Col className="col-sm" sm={12}>
              <Form>
                <FormGroup className="mb-2">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Pesquisar no Menu"
                      type="text"
                      className="form-control-reduce"
                    />
                  </InputGroup>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row className="min-with-100">
            <Col sm={12}>
              <ul className="menuAccordion">
                <li className="default open">
                  <div className="link">
                    <i className="fa fa-address-card" />
                    Gerenciar Acessos
                    <i className="fa fa-chevron-down" />
                  </div>
                  <ul className="submenu">
                    <li>
                      <a href="#" className="text-blue">
                        <span className="fa fa-check float-left ml-xl--3" />
                        <span className="fa fa-user pr-1" /> Usuário
                        <span className="fa fa-caret-right float-right px-3" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-id-badge pr-1" /> Perfil
                        <span className="fa fa-caret-right float-right px-3" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-list-ul pr-1" /> Permissões
                        <span className="fa fa-caret-right float-right px-3" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="link">
                    <i className="fa fa-cogs" />
                    Configurações do Sistema
                    <i className="fa fa-chevron-down" />
                  </div>
                  <ul className="submenu">
                    <li>
                      <a href="#">Parametros</a>
                    </li>
                    <li>
                      <a href="#">Estabelecimentos</a>
                    </li>
                    <li>
                      <a href="#">Classificados</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="link">
                    <i className="fa fa-ambulance" />
                    Gerenciador de Frotas
                    <i className="fa fa-chevron-down" />
                  </div>
                  <ul className="submenu">
                    <li>
                      <a href="#">Veículos</a>
                    </li>
                    <li>
                      <a href="#">Motoristas</a>
                    </li>
                    <li>
                      <a href="#">Multas</a>
                    </li>
                    <li>
                      <a href="#">Abastecimento</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="link">
                    <i className="fa fa-globe" />
                    Materiais/Produtos
                    <i className="fa fa-chevron-down" />
                  </div>
                  <ul className="submenu">
                    <li>
                      <a href="#">Cadastro</a>
                    </li>
                    <li>
                      <a href="#">Entrada/Saída</a>
                    </li>
                    <li>
                      <a href="#">Espurgo</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.propTypes = {
  show: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    toolToggle: SidebarToggle(state, TOGGLE_MENU),
  };
}

export default connect(
  mapStateToProps,
  null,
)(Sidebar);
