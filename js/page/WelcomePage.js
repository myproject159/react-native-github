import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';

import NavigationUtil from "../navigator/NavigationUtil";

type Props = {};

export default class WelcomePage extends Component<Props> {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation
            })
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>WelcomePage</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
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
