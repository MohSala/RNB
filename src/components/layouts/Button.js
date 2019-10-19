import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



class Button extends React.Component {
    constructor(props) {
        super(props)
        this.onPress = this.onPress.bind(this)
    }
    render() {

        const containerStyle = [
            styles.container
        ];
        return (
            <TouchableOpacity style={containerStyle} onPress={this.onPress}>
                <Text style={styles.text}>LOG IN</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#4287f5',
        marginBottom: 12,
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    text: {
        color: 'white',
        textAlign: "center",
        height: 20
    },
    containerEnabled: {
        opacity: 1
    },
    containerDisabled: {
        opacity: 0.3
    },
});

export default Button;