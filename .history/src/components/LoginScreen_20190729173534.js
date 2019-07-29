import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const LoginScrren = () => {
    return (
        <View style={styles.body}>
            <Text>Login to Netwoven</Text>
        </View>
    );
}

export default LoginScrren;

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
    },
});