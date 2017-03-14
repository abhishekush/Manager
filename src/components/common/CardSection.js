import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',

          borderBottomWidth: 0,
          marginTop: 10,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 5
  }
};

export { CardSection };
