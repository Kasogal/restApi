import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

import ImgFlagBR from '../../assets/images/flags/br.png';
import ImgFlagUS from '../../assets/images/flags/usa.png';

class LocaleToggle extends React.Component {
  constructor(props) {
    super(props);
    this.clickPtBR = this.clickPtBR.bind(this);
    this.clickEnUS = this.clickEnUS.bind(this);
    this.state = {
      ...props,
      flagActive: ImgFlagBR,
    };
  }

  clickPtBR(event) {
    this.setState({ flagActive: ImgFlagBR });
    event.stopPropagation();
    this.props.onLocaleToggle('br');
  }

  clickEnUS(event) {
    this.setState({ flagActive: ImgFlagUS });
    event.stopPropagation();
    this.props.onLocaleToggle('en');
  }

  componentDidMount() {
    if (this.props.locale === 'en') {
      this.setState({ flagActive: ImgFlagUS });
      localStorage.setItem('locale', 'en');
    } else {
      this.setState({ flagActive: ImgFlagBR });
      localStorage.setItem('locale', 'br');
    }
  }

  render() {
    return (
      <UncontrolledDropdown className="float-right">
        <DropdownToggle caret color="white">
          <img alt="..." src={this.state.flagActive} />
        </DropdownToggle>
        <DropdownMenu>
          <li>
            <DropdownItem onClick={this.clickPtBR} toggle>
              <img alt="..." src={ImgFlagBR} /> Português (BR)
            </DropdownItem>
          </li>
          <li>
            <DropdownItem onClick={this.clickEnUS} toggle>
              <img alt="..." src={ImgFlagUS} /> Inglês - (USA)
            </DropdownItem>
          </li>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
