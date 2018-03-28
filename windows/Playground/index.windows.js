import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button
} from 'react-native';

import ExtendedScrollView from '@bluejeans/react-native-bluejeans-components/ExtendedScrollView'

class Playground extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowMultiplyElementsInScroll: false,
      backgroundColor:'grey',
      scrollEnabled:true,
      showsVerticalScrollIndicator: false,
      widthValue: 8
    }
  }

  addItemsClick = () => {
      this.setState({ allowMultiplyElementsInScroll: true });
  }

  removeItemsClick = () => {
      this.setState({ allowMultiplyElementsInScroll: false });
  }
  renderElemntsInScroll = () => {
        let res = [];
        for (let i = 0; i < 100; i++) {
            res.push(<Text key={i}>Scroll text item {i}</Text>);
        }
        return res;
    }
   
  setTextValue = (value) => {
    this.colorValue = value;
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
             <Button style={{margin:10}} title='Add items' onPress={() => this.setState({ allowMultiplyElementsInScroll: true })}/>
             <Button style={styles.buttonOption} title='Remove items'  onPress={() => this.setState({ allowMultiplyElementsInScroll: false })}/>

            <Text>Background color</Text>
            <TextInput defaultValue='grey' ref='colorInput' onChangeText={this.setTextValue}></TextInput>
            <Button style={styles.buttonOption} title='Set background color'  onPress={() => {this.setState({ backgroundColor: this.colorValue })}}/>
            <Button style={styles.buttonOption} title='Set scroll enabled'  onPress={() => {this.setState({ scrollEnabled: !this.state.scrollEnabled })}}/>
            <Button style={styles.buttonOption} title='Show/Hide vertical scroll'  onPress={() => {this.setState({ showsVerticalScrollIndicator: !this.state.showsVerticalScrollIndicator })}}/>
            <Text>Scroll width</Text>
            <TextInput defaultValue={this.state.widthValue.toString()} onChangeText={ (value) => {this.setState({ widthValue: Number(value) })}}></TextInput>
            
        </View>
        <View style={styles.rightView}>
            <Text style={styles.welcome}>Scroll container</Text>
            <ExtendedScrollView  
              style={styles.scrollView} 
              ref="extscroll" 
              backgroundColor={this.state.backgroundColor}
              scrollEnabled={this.state.scrollEnabled}
              scrollWidth = {this.state.widthValue}
              >
                <Text>Scroll item</Text>
                {this.state.allowMultiplyElementsInScroll && this.renderElemntsInScroll()}
            </ExtendedScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    position:'absolute',
    height: 500,
  },
  leftView:{
      marginLeft:10,
      marginRight:10,
      flexBasis:'300'
  },
  rightView:{
    marginLeft:10,
    marginRight:10,
    backgroundColor:'grey',
    
    width:600
  },
  scrollView:{
    margin:5
  },
  buttonOption: {
    margin: 5,
    backgroundColor:'red',
    position:'absolute',
    width:60,
    height:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

AppRegistry.registerComponent('Playground', () => Playground);

