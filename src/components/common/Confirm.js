import React, {Component} from 'react';
import {Text, View, Modal} from 'react-native';
import {Button, CardSection} from '../common';

const Confirm = ({children, visible, onAccept, onDecline}) => {

    const {containerStyle, cardSectionStyle, textStyle} = styles;

    return(

        <Modal
            visible={visible}
            transparent
            animationType={"slide"}
            onRequestClose={()=>{}}
        >
            <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
               <Text style={textStyle}>{children}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
            </View>
        </Modal>

    )
}

const styles = {
    cardSectionStyle: {
       justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        flex:1,
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}


export {Confirm}