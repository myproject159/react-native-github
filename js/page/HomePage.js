import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import NavigationUtil from "../navigator/NavigationUtil.js";
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import { BackHandler } from "react-native"
import {NavigationActions} from "react-navigation";

type Props = {};


class HomePage extends Component<Props> {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
    }
    //处理 Android 中的物理返回键
    onBackPress = () => {
        const {dispatch, nav} = this.props
        if(nav.index === 0){
            return false
        }
        dispatch(NavigationActions.back())
        return true
    }

    render() {
        NavigationUtil.navigation = this.props.navigation
        return <DynamicTabNavigator/>

    }
}
const styles = StyleSheet.create({
    welcome: {
        color: '#f00',
        textAlign: "center"
    }
})

const mapStateToProps = state => ({
    nav:state.nav
})

export default connect(mapStateToProps)(HomePage)