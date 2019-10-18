import React from 'react'
import { View, Text } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    constainerStyle: {
        borderRadius: 2,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }

}

export default Card
