import React from 'react';
import { loaderStatus } from '../../utils/utilities';
import AuthActions from '../Security/auth.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onShowLoading();
  }

  onShowLoading() {
    loaderStatus.next(true);
    AuthActions.localLogin();
    setTimeout(() => {
      loaderStatus.next(false);
    }, 2000);
  }

  render() {
    return null;
  }
}

export default App;
