import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {createAppContainer} from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NavigationUtil from "../navigator/NavigationUtil.js";


type Props = {};

export default class PopularPage extends Component<Props> {
    constructor(props) {
        super(props)
        this.tabNames=['Java', 'Android', 'IOS', 'React', 'React Native', 'PHP']
    }
    _genTabs() {
        const tabs = {}
        this.tabNames.forEach((item, index)=>{
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item}/>,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }
    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator(
                this._genTabs(),{
                    tabBarOptions: {
                        tabStyle:styles.tabStyle,
                        upperCaseLabel:false,
                        scrollEnabled: true,
                        style: {
                            backgroundColor: '#678'
                        },
                        indicatorStyle: styles.indicatorStyle,
                        labelStyle: styles.labelStyle
                    }
                }
            )
        )
        return <View style={{flex:1, marginTop: 30}}>
            <TabNavigator/>
        </View>
    }
}

class PopularTab extends Component<Props> {
    render() {
        const {tabLabel} = this.props;
        return (
            <View>
                <Text>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, 'DetailPage')
                }}>
                    跳转到详情页面
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        color: '#f00',
        textAlign: "center"
    },
    tabStyle:{
        minWidth: 50
    },
    indicatorStyle:{
        height:2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
    }
})
