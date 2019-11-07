import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index'
import NavigationUtil from "../navigator/NavigationUtil.js";

type Props = {};

class TrendingPage extends Component<Props> {

    render() {
        return (
            <View>
                <Text style={styles.welcome}>TrendingPage</Text>
                <Button
                    title="改变主题色"
                    onPress={()=>{
                        this.props.onThemeChange('#096')
                    }}
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage)