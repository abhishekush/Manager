// Import libraries for making a component
import React from 'react';
import { Text, View,Image, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux';

// Make a component

const Header = (props) => {
  const { textStyle, viewStyle, left, center, right } = styles;

  const back = () =>{
    Actions.pop();
  }

  return (
    <View style={viewStyle}>
      <View style={left}>
        {
          props.back &&
          <TouchableOpacity
              onPress={back}
          >
             <Image
                 style={styles.back}
                 source={require('../../../assets/android-arrow-back.png')}
             />
          </TouchableOpacity>

        }
      </View>
      <View style={center}>
      <Text style={textStyle}>{props.headerText}</Text>
      </View>
      <View style={right}>
        <Text style={textStyle}></Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#42b3ff',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    flex:0,
    justifyContent: 'center',

  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#ffffff'
  },
  back: {
    width: 20,
    height: 20,

  },
  left:{

    alignSelf: 'flex-start',
    flex: 1,
    justifyContent: 'center'
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2
  },
    right:{

        alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'center'
    },
};

// Make the component available to other parts of the app
export { Header };
