/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardFooter,
} from 'reactstrap';

class SearchUser extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-2" fluid>
          <Row>
            <Col sm={5}>
              <Card className="shadow-sm border-left-especial">
                <CardHeader className="text-white bg-default small">
                  <i className="fa fa-search" />{' '}
                  <strong>Filtros de pesquisa</strong>
                </CardHeader>
                <CardBody className="bg-lighter">
                  <Form>
                    <Row className="mb--3">
                      <Col sm={3}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            Matrícula:{' '}
                          </label>
                          <Input
                            className="form-control-alternative form-control-alternative-reduce"
                            id="searchRegistration"
                            placeholder="99999"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={9}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            Nome:{' '}
                          </label>
                          <Input
                            className="form-control-alternative form-control-alternative-reduce"
                            id="searchName"
                            placeholder="Informe o nome para pesquisar"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb--3">
                      <Col sm={3}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            CPF:{' '}
                          </label>
                          <Input
                            className="form-control-alternative form-control-alternative-reduce"
                            id="searchCPF"
                            placeholder="000.000.000-00"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={9}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            E-mail:{' '}
                          </label>
                          <Input
                            className="form-control-alternative form-control-alternative-reduce"
                            id="searchEmail"
                            placeholder="Informe o e-mail para pesquisar"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb--3">
                      <Col sm={4}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            Data Nascimento:{' '}
                          </label>
                          <Input
                            className="form-control-alternative form-control-alternative-reduce"
                            id="searchDate"
                            placeholder="26/05/1983"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={8}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            Perfil:{' '}
                          </label>
                          <Input
                            className="form-control-alternative form-control-alternative-reduce"
                            id="searchPerf"
                            placeholder="Selecione o perfil"
                            type="select"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <FormGroup>
                          <label className="font-weight-bold small ml-1">
                            Situação:{' '}
                          </label>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              defaultChecked
                              id="customCheck2"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              Ativo
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="mt-5">
                        <Button
                          className="btn-icon btn-3 float-right ml-3"
                          color="default"
                          type="button"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-search" />
                          </span>
                          <span className="btn-inner--text">Pesquisar</span>
                        </Button>
                        <Button
                          className="btn-icon btn-3 float-right"
                          color="secundary"
                          type="button"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-eraser" />
                          </span>
                          <span className="btn-inner--text">Limpar</span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col sm={7}>
              <Card className="shadow-sm border-left-especial">
                <CardHeader className="text-white bg-default small">
                  <i className="fa fa-list" />{' '}
                  <strong>Resultado da pesquisa</strong>
                </CardHeader>
                <CardBody className="bg-lighter">
                  <Table
                    className="align-items-center table-flush table-light table-sm table-striped"
                    responsive
                  >
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Matrícula</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Perfil</th>
                        <th scope="col" className="text-center">
                          Status
                        </th>
                        <th scope="col" className="text-center">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>00000001</td>
                        <td>002.207.921-19</td>
                        <td>Gabriel Aparecido Sant'ana Rosa</td>
                        <td>Administrador</td>
                        <td className="text-center">Ativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>00000002</td>
                        <td>111.111.111-11</td>
                        <td>Teste 1</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>00000003</td>
                        <td>222.222.22-22</td>
                        <td>Teste 2</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>00000004</td>
                        <td>333.333.333-33</td>
                        <td>Teste 3</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>00000005</td>
                        <td>444.444.444-44</td>
                        <td>Teste 4</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>00000006</td>
                        <td>555.555.555-55</td>
                        <td>Teste 5</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>00000007</td>
                        <td>666.666.666-66</td>
                        <td>Teste 6</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>00000008</td>
                        <td>777.777.777-77</td>
                        <td>Teste 8</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>00000009</td>
                        <td>888.888.888-88</td>
                        <td>Teste 9</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>00000010</td>
                        <td>999.999.999-99</td>
                        <td>Teste 10</td>
                        <td>Atendente</td>
                        <td className="text-center">Inativo</td>
                        <td className="text-center">
                          <i className="fa fa-edit mr-2 text-blue text-size-default" />
                          <i className="fa fa-file-alt mr-2 text-white text-size-default" />
                          <i className="fa fa-times-circle mr-2 text-warning text-size-default" />
                          <i className="fa fa-print text-default text-size-default" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchUser;
