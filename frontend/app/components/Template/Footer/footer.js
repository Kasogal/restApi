/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Footer extends Component {
  render() {
    return (
      <footer className="footer footer-login">
        <div className="copyright">
          <strong>
            <FormattedMessage {...messages.corporate} /> {' - '}
            <FormattedMessage {...messages.name} />{' '}
          </strong>{' '}
          - <FormattedMessage {...messages.nameComplete} />
          <div className="float-right d-none d-sm-inline-block">
            <b>
              <FormattedMessage {...messages.version} />
            </b>{' '}
            1.0.0
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
