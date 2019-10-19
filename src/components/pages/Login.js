import * as React from "react";
import { Image, StyleSheet, View, TextInput, KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import Button from "../layouts/Button";
import firebase from 'firebase'
import Spinner from '../layouts/Spinner'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false,
            error: ''
        };
    }

    handleLoginPress = () => {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })

    };

    onLoginFail = () => {
        this.setState({ error: 'Authentication Failed', loading: false })
    }

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    renderSpinner() {
        if (this.state.loading) {
            return <Spinner size='small' color="#0000ff" />
        }
        return <Text style={styles.text}>LOG IN</Text>
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.form}>
                    <TextInput style={styles.textInput}
                        ref={this.textInputRef}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        placeholder='Email Address'
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"

                    />

                    <TextInput style={styles.textInput}
                        ref={this.textInputRef}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry={true}
                        returnKeyType="done"
                        placeholder='please type password'

                    />
                    <Text style={styles.errorText}>{this.state.error}</Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLoginPress}>
                        {this.renderSpinner()}
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    },
    textInput: {
        height: 40,
        borderColor: 'silver',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    },
    errorText: {
        // Setting a fixed text height prevents the label
        // "jump" when we show/hide it
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        marginBottom: 12,
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#4287f5"
    },
    text: {
        color: '#4287f5',
        textAlign: "center",
        fontSize: 17,
        height: 20
    },

});

export default LoginScreen;