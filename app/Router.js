import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from './scenes/Welcome';
import SingPassLogin from './scenes/SingPassLogin';
import FetchingInfo from './scenes/FetchingInfo';
import Beneficiaries from './scenes/Beneficiaries';
import WillGeneration from './scenes/WillGeneration';
import AttachDocuments from './scenes/AttachDocuments';
import DisplayText from './scenes/DisplayText';
import Final from './scenes/Final';

export default class RouterComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

        <Router
          navigationBarStyle={styles.routerNavigationBarStyle}
          titleStyle={styles.routerTitleStyle}
          leftButtonIconStyle={{ tintColor: '#000', marginLeft: 10 }}
          leftButtonTextStyle={{ color: '#000', paddingLeft: 10 }}
          rightButtonTextStyle={{ color: '#000', paddingRight: 10 }}
        >

          <Scene key="preMain">
            <Scene
              key="welcomeScene"
              component={Welcome}
              title="Will I Am"
              titleStyle={{ color: '#fff' }}
              navigationBarStyle={styles.transparentNavigationBarStyle}
            />

            <Scene  
              key="singPassLoginScene"
              component={SingPassLogin}
              title="Login"
            />

            <Scene  
              key="fetchingInfoScene"
              component={FetchingInfo}
              title="Your Assets"
            />

            <Scene
              key="beneficiariesScene"
              component={Beneficiaries}
              title="Your Beneficiaries"
            />

            <Scene  
              key="willGenerationScene"
              component={WillGeneration}
              title="Your Will"
            />

            <Scene
              key="attachDocumentsScene"
              component={AttachDocuments}
              title="Attach proof of assets"
            />

            <Scene
              key="displayTextScene"
              component={DisplayText}
              title="Proof of assets"
            />

            <Scene
              key="finalScene"
              component={Final}
              title="Success"
            />

          </Scene>

        </Router>
      
      );
    }
  }


  const styles = StyleSheet.create({
    routerNavigationBarStyle: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderBottomWidth: 0,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 2
    },
    routerTitleStyle: {
      color: '#000',
      fontWeight: '600',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    transparentNavigationBarStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0)'
    }
  });
