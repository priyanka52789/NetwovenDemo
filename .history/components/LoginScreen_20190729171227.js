import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const LoginScrren = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <View style={styles.body}>
                        <Text>Login to Netwoven</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default LoginScrren;