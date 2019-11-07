import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, DeviceInfo, Text} from 'react-native';

import NavigationUtil from "../navigator/NavigationUtil.js";

type Props = {};

export default class DetailPage extends Component<Props> {

    render() {
        return (
            <View>
                <Text style={styles.welcome}>DetailPage</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        color: '#f00',
        textAlign: "center"
    }
})
