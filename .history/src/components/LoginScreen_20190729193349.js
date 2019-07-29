import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const LoginScrren = (props) => {
    return (
        <View style={{ padding: 50, flex: 1, backgroundColor: 'red' }}>
            <Text>Login to Netwoven {props.loginStatus}</Text>
        </View>
    );
}

export default LoginScrren;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f1f1f1',
        flex: 1
    },
});