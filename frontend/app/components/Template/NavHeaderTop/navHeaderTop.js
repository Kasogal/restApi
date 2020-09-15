/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Container,
  UncontrolledCollapse,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  UncontrolledTooltip,
  DropdownItem,
  DropdownMenu,
  Badge,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import LogoLogin from '../../../assets/images/logo/logo.png';
import messages from './messages';
import AuthActions from '../../../containers/Security/auth.actions';
import AuthService from '../../../containers/Security/auth.service';

class NavHeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(event) {
    event.preventDefault();
    AuthActions.logout(true);
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-white bg-white navbar-top-header"
          expand="lg"
        >
          <Container>
            {' '}
            <NavbarBrand
              className="navbar-top-logo"
              onClick={e => e.preventDefault()}
            >
              <span className="navbar-top-logo">
                <img
                  src={LogoLogin}
                  alt="Logo"
                  className="navbar-top-logo-img"
                />
              </span>
            </NavbarBrand>
            <h1 className="logo-top">
              <FormattedMessage {...messages.name} />
            </h1>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="ni ni-user-run text-blue" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <FormattedMessage {...messages.shortcut} />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-default"
                      data-toggle="collapse"
                      id="navbar-default"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              {AuthService.getState().isAuthenticated ? (
                <Nav className="ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon text-blue"
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="ni ni-chat-round " />
                      <span className="nav-link-inner--text d-lg-none">
                        <FormattedMessage {...messages.support} />
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon text-blue"
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="ni ni-notification-70" />
                      <span className="nav-link-inner--text d-lg-none">
                        <FormattedMessage {...messages.notifications} />
                      </span>
                      <sup>
                        <Badge
                          color="primary"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </Badge>
                      </sup>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <NavLink
                      aria-expanded={false}
                      aria-haspopup
                      className="nav-link-icon text-blue"
                      data-toggle="dropdown"
                      href="#"
                      id="navbar-default_dropdown_1"
                      onClick={e => e.preventDefault()}
                      role="button"
                    >
                      <i className="ni ni-settings-gear-65" />
                      <span className="nav-link-inner--text d-lg-none">
                        <FormattedMessage {...messages.settings} />
                      </span>
                    </NavLink>
                    <DropdownMenu
                      aria-labelledby="navbar-default_dropdown_1"
                      right
                    >
                      <DropdownItem href="#" onClick={e => e.preventDefault()}>
                        <FormattedMessage {...messages.support} />
                      </DropdownItem>
                      <DropdownItem href="#" onClick={e => e.preventDefault()}>
                        <FormattedMessage {...messages.notifications} />
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem href="#" onClick={e => e.preventDefault()}>
                        <FormattedMessage {...messages.settings} />
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem href="#" onClick={this.onLogout}>
                        <FormattedMessage {...messages.logout} />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink
                      id="btn-logout"
                      className="nav-link-icon text-blue"
                      href="#"
                      onClick={this.onLogout}
                    >
                      <i className="fa fa-sign-out-alt" />
                      <span className="nav-link-inner--text d-lg-none">
                        <FormattedMessage {...messages.logout} />
                      </span>
                    </NavLink>
                    <UncontrolledTooltip
                      delay={0}
                      placement="top"
                      target="btn-logout"
                    >
                      <FormattedMessage {...messages.logout} />
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              ) : (
                <></>
              )}
              &nbsp;
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Navbar
          className="navbar-horizontal navbar-white bg-blue navbar-top-header"
          expand="lg"
        >
          <Container>
            &nbsp;
            <h3 className="logo-sub-top">
              <FormattedMessage {...messages.nameComplete} />
            </h3>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavHeaderTop;
