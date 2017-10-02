import React, { Component } from 'react';
import { View, AppState } from 'react-native';
import Router from './Router';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  
  handleAppStateChange(appState) {
    switch (appState) {
      case 'background':
        console.log('App is in background');
        break;
      case 'active':
        console.log('App is active');
        break;
      case 'inactive':
        console.log('App is being put in multitasking mode or interrupted');
        break;
      default:
        console.log('Something else happened to the app');
    }
  }
	
	render() {
		return (
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    );
	}
}

export default App;
