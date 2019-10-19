import React, { Component } from 'react';

import Board from './Features/Board';
import Loading from './Components/Loading';

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: message => { },
  hideLoading: () => { }
})

class App extends Component {

  state = {
    loading: false,
    message: null
  }

  showLoading = message => this.setState({
    loading: true,
    message
  })
  
  hideLoading = () => this.setState({ loading: false })

  render() {
    const { showLoading, hideLoading } = this

    const value = {
      ...this.state,
      showLoading,
      hideLoading
    }

    return (
      <LoadingContext.Provider value={value}>
        <LoadingContext.Consumer>
          {
            ({ showLoading, hideLoading, loading, message }) => (
              <div className="app">
                <Board  {...{ showLoading, hideLoading }} />
                <Loading {...{ loading, message }} />
              </div>
            )
          }
        </LoadingContext.Consumer>
      </LoadingContext.Provider>
    );
  }
}

export default App;
