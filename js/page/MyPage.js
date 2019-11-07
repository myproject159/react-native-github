import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import NavigationUtil from "../navigator/NavigationUtil.js";

type Props = {};

export default class MyPage extends Component<Props> {

    render() {
        return (
            <View>
                <Text style={styles.welcome}>MyPage</Text>
                <Text onPress={() => this.props.navigation.navigate('DetailPage')}
                >
                    跳转到详情页面
                </Text>
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