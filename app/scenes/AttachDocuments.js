import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, AlertIOS, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Import project components
import Camera from 'react-native-camera';
import PrimaryButton from '../components/PrimaryButton';
import base64 from 'base-64';

export default class AttachDocuments extends Component {

	constructor(props) {
		super(props);
		this.state = {
			'api_key': ' ',		// redacted
			'path': ' ',
			'isCaptured': false
		};
	}

	takePicture() {
	    const options = {};
	    //options.location = ...
	    this.camera.capture({ metadata: options })
	      .then((data) => {
	      	console.log(data);
	      	this.setState({ isCaptured: true });
	      	this.displayPhoto(data.path);
	      	AlertIOS.alert('Image Captured', '',
              [
                { text: 'OK', onPress: () => {
                	const fakeData = '';	// redacted
                	Actions.displayTextScene({ data: { text: fakeData } });
                }, style: 'default' }
              ]
            );
	      	this.ocr(this.toBase64(data));
	      })
	      .catch((err) => {
	      	console.error(err);
	      	AlertIOS.alert('Image Captured', '',
              [
                { text: 'OK', onPress: () => {
                	const fakeData = '';	// redacted
                	Actions.displayTextScene({ data: { text: fakeData } });
                }, style: 'default' }
              ]
            );
	      });
	  }

	renderCameraOrImage() {
		const fakeData = '';	// redacted

		if (this.state.isCaptured) {
			return ( 
	      	  	<TouchableOpacity onPress={() => { Actions.displayTextScene({ data: { text: fakeData } });}}>
	      	  		<View style={{ flex: 1 }}>
		      	  		{/*<Image
	          				source={require(this.state.path)}
	          				style={styles.preview}
	        			/>
	        			*/}
        			</View>
        		</TouchableOpacity>
			);
		} else {
			return (<Camera
	          ref={(cam) => {
	            this.camera = cam;
	          }}
	          style={styles.preview}
	          aspect={Camera.constants.Aspect.fill}>

	      	  <View style={{ marginBottom: 80, height: 100, width: 120 }}>
	      	  <Image
					style={{ width: 125, height: 50 }}
					source={require('../images/singpass.png')}
			   />
	      	  <PrimaryButton onPress={() => { this.takePicture(); }}>
				CAPTURE
			  </PrimaryButton>
			  </View>
	        </Camera>);
		}
	}

	toBase64(raw) {
		return base64.encode(raw);
	}

	ocr(base64Img_a) {
		const base64Img = base64Img_a.replace("data:image/jpeg;base64,", '', base64Img_a);
		console.log(base64Img);
		const req = fetch('https://vision.googleapis.com/v1/images:annotate?key=' + this.state.api_key, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"requests": [
					{
						"image": {
							"content" : base64Img
						},
						"features": [
							{
								"type": "TEXT_DETECTION"
					        }
						]
					}
				]	
			})
		}).then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			Actions.displayTextScene({data: {'text': responseJson.responses[0].fullTextAnnotation.text}});
		})
		.catch((error) => {
			console.log(error);
		});
	}

	displayPhoto(path) {
		this.setState({path: path});
	}

	render() {
	    return (
	      <View style={styles.container}>
	        { this.renderCameraOrImage() }
	      </View>
	    );
	  }

  
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		padding: 20
	},
	preview: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
    	justifyContent: 'flex-end',
    	alignItems: 'center'
 	}
});