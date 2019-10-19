import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Header = ({ title }) => {
    const { textStyle, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title || 'DNA'}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 15,
        marginTop: 15
    }
}




export default Header;
