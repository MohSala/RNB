import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



class Button extends React.Component {
    onPress = () => {
        return console.log('pressed');
    }
    render() {
        const { label, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
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
    }
});

export default Button;