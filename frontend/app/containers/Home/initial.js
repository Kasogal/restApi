/* eslint-disable spaced-comment */
import React, { Component, Fragment } from 'react';
import { loaderStatus } from '../../utils/utilities';
import NavHeaderTop from '../../components/Template/NavHeaderTop/navHeaderTop';
import NavHeaderTool from '../../components/Template/NavHeaderTool/navHeaderTool';
import Sidebar from '../../components/Template/Sidebar/sidebar';

class Initial extends Component {
  constructor(props) {
    super(props);
    this.onShowLoading();
  }

  onShowLoading() {
    loaderStatus.next(true);
    setTimeout(() => {
      loaderStatus.next(false);
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <NavHeaderTop />
        <NavHeaderTool />
        <Sidebar />
      </Fragment>
    );
  }
}

export default Initial;
