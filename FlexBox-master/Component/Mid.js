import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Mid extends Component {
    render() { 
        return ( 
            <View style={Midle.tengah}>
                <View style={Midle.content}>

                </View>
                <View style={{flex: 2, backgroundColor: '#FFCA03'}}>

                </View>
            </View>
         );
    }
}
 
const Midle = StyleSheet.create({
    tengah :{
        flexDirection: 'row'
    },
    content :{
        flex: 3,
        height: 518,
        backgroundColor: '#FF2442'
    }
})

export default Mid;