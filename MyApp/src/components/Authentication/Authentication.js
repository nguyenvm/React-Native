import React, { Component } from 'react';
import { View, Text, TouchableOpacity,
        Image, Dimensions, StyleSheet, TextInput }
        from 'react-native';

import register from '../../api/register';
import SignIn from './SignIn';
import SignUp from './SignUp';

import icLogo from '../../../src/img/appIcon/ic_logo.png';
import icBack from '../../../src/img/appIcon/back_white.png';

const { width } = Dimensions.get('window');

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }

    gotoSignIn() {
        this.setState({ isSignIn: true });
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    backToMain() {
        const { navigation } = this.props;
        navigation.goBack()
    }
    render() {
    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? <SignIn backToMain={this.backToMain.bind(this)}/> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
    return (
        <View style={styles.wrapAuthen}>
            <View style={styles.header}>
                <TouchableOpacity onPress={this.backToMain.bind(this)}>
                    <Image source={icBack} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Disney Shop</Text>
                <Image source={icLogo} style={styles.icon} />
            </View>
            {mainJSX}
            <View style={styles.wrapBtnState}>
                <TouchableOpacity style={styles.signIn} onPress={this.signIn.bind(this)}>
                    <Text style={isSignIn ? styles.ActiveStyle : styles.inActiveStyle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUp} onPress={this.signUp.bind(this)}>
                    <Text style={!isSignIn ? styles.ActiveStyle : styles.inActiveStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapAuthen: {
        flex: 1,
        backgroundColor: '#4267B2',
        padding: 10,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 25,
    },
    icon: {
        width: 27,
        height: 27
    },
    wrapBtnState: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginBottom: 10,
    },
    ActiveStyle: {
        color: '#4267B2',
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    },
    inActiveStyle: {
        color: '#C8C8C8',
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        fontWeight: '500'
    },
    signIn: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1,
    },
    signUp: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1,
    }
});
