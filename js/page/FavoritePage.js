import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import NavigationUtil from "../navigator/NavigationUtil.js";

type Props = {};

export default class FavoritePage extends Component<Props> {

    render() {
        return (
            <View>
                <Text style={styles.welcome}>FavoritePage</Text>
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