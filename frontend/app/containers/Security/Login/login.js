/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { loaderStatus } from '../../../utils/utilities';
import NavHeaderTop from '../../../components/Template/NavHeaderTop/navHeaderTop';
import Footer from '../../../components/Template/Footer/footer';
import AuthActions from '../auth.actions';
import messages from '../messages';
import AuthService from '../auth.service';
import LocaleToggle from '../../../components/LocaleToggle';
import ModalAlertError from '../../../components/Modals/AlertError/modalAlertError';

const validate = require('validate.js');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(value) {
    this.setState({ isOpen: value });
  }

  render() {
    return (
      <>
        {this.state.isOpen ? (
          <ModalAlertError
            isOpen
            closeButton={<FormattedMessage {...messages.modalErrorBtnClose} />}
            title={<FormattedMessage {...messages.modalErrorTitle} />}
            subTitle={<FormattedMessage {...messages.modalErrorSubtitle} />}
            msg={
              validate.isEmpty(AuthService.getState().message) ? (
                <FormattedMessage {...messages.modalErrorMsg} />
              ) : (
                AuthService.getState().message
              )
            }
          />
        ) : (
          <></>
        )}
        <Formik
          {...this.props}
          initialValues={{ username: '', password: '', isOpen: false }}
          onSubmit={(values, actions) => {
            loaderStatus.next(true);
            actions.setSubmitting(false);
            AuthActions.login(values);
            loaderStatus.next(false);
            this.openModal(true);
            this.forceUpdate();
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .email(<FormattedMessage {...messages.validateInvalidUserName} />)
              .required(
                <FormattedMessage {...messages.validateRequiredUserName} />,
              ),
            password: Yup.string().required(
              <FormattedMessage {...messages.validateRequiredPassword} />,
            ),
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <>
                <NavHeaderTop />
                <Container>
                  <Col lg="5" md="7" className="container-login">
                    <Card className="bg-blue shadow border-0">
                      <CardHeader className="bg-transparent pb-3">
                        <div className="text-center mt-2 mb-3">
                          <h2 className="text-white login-top">
                            <FormattedMessage {...messages.title} />
                          </h2>
                        </div>
                      </CardHeader>
                      <CardBody className="px-lg-4 py-lg-4">
                        <Form role="form" onSubmit={handleSubmit}>
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <FormattedMessage {...messages.formUserName}>
                                {msgPlaceHolder => (
                                  <Input
                                    placeholder={msgPlaceHolder}
                                    type="text"
                                    id="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                      errors.username &&
                                      touched.username &&
                                      'error'
                                    }
                                  />
                                )}
                              </FormattedMessage>
                            </InputGroup>
                            {errors.username && touched.username && (
                              <div className="input-feedback-login">
                                {errors.username}
                              </div>
                            )}
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <FormattedMessage {...messages.formPassword}>
                                {msgPlaceHolder => (
                                  <Input
                                    placeholder={msgPlaceHolder}
                                    type="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                      errors.password &&
                                      touched.password &&
                                      'error'
                                    }
                                  />
                                )}
                              </FormattedMessage>
                            </InputGroup>
                            {errors.password && touched.password && (
                              <div className="input-feedback-login">
                                {errors.password}
                              </div>
                            )}
                          </FormGroup>
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCheckLogin"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customCheckLogin"
                            >
                              <span className="text-muted">
                                <FormattedMessage {...messages.formConnected} />
                              </span>
                            </label>
                          </div>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="white"
                              type="submit"
                              block
                              disabled={isSubmitting}
                            >
                              <span className="btn-inner--icon">
                                <i className="ni ni-button-power" />
                              </span>
                              <span className="btn-inner--text">
                                <FormattedMessage {...messages.btnAccess} />
                              </span>
                            </Button>
                          </div>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="warning"
                              type="button"
                              block
                            >
                              <span className="btn-inner--icon">
                                <i className="ni ni-curved-next" />
                              </span>
                              <span className="btn-inner--text">
                                <FormattedMessage {...messages.btnRecover} />
                              </span>
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                      <CardFooter className="bg-blue">
                        <Col>
                          <LocaleToggle />
                        </Col>
                      </CardFooter>
                    </Card>
                  </Col>
                </Container>
                <Container>
                  <Footer />
                </Container>
              </>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default Login;
