/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavHeaderToolMenu from './navHeaderTool.reducer';
import { CHANGE_BREADCRUMBS } from './navHeaderTool.actionTypes';

class NavHeaderTool extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const toolMenu = this.props.toolMenu.navHeaderTool;
    return (
      <nav className="navbar-horizontal navbar-white bg-white navbar-top-header navbar navbar-expand-lg navbar-tool-header">
        <ul className="navbar-nav">
          <li className="nav-item cursor-pointer">
            <span className="nav-link" data-widget="pushmenu">
              <i className="fa fa-bars text-uppercase font-weight-bold" />
            </span>
          </li>
        </ul>
        <div className="navbar-brand">
          <i
            className={`fa ${toolMenu.icon} text-uppercase font-weight-bold text-blue `}
          />
          <span className="text-uppercase font-weight-bold text-blue">
            {' '}
            <strong>{toolMenu.mod}</strong> - {toolMenu.menu}
          </span>
        </div>
      </nav>
    );
  }
}

NavHeaderTool.propTypes = {
  toolMenu: PropTypes.shape({
    icon: PropTypes.string,
    mod: PropTypes.string,
    menu: PropTypes.string,
    loadingMenu: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    toolMenu: NavHeaderToolMenu(state, CHANGE_BREADCRUMBS),
  };
}

export default connect(
  mapStateToProps,
  null,
)(NavHeaderTool);
