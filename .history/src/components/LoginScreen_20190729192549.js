import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const LoginScrren = () => {
    return (
        <View style={styles.body}>
            <Text>Login to Netwoven 111</Text>
        </View>
    );
}

export default LoginScrren;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f1f1f1',
    },
});