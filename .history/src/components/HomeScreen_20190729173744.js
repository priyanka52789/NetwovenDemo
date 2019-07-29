import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.body}>
            <Text>Welcome to HomeScreen</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f1f1f1',
    },
});