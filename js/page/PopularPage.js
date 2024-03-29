import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View, Text,FlatList, RefreshControl} from 'react-native'
import {createAppContainer} from "react-navigation"
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigationUtil from "../navigator/NavigationUtil.js"
import PopularItem from '../common/PopularItem'
import {connect} from 'react-redux'
import actions from '../action/index'
const URL = 'https://api.github.com/search/repositories?q='
const QUERY_STR = '&sort=stars'
const THEME_COLOR = 'red'


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
                screen: props => <PopularTabPage {...props} tabLabel={item}/>,
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
        return <View style={styles.container}>
            <TabNavigator/>
        </View>
    }
}

class PopularTab extends Component<Props> {
    constructor(props) {
        super(props)
        const {tabLabel} = this.props
        this.storeName = tabLabel
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        const {onLoadPopularData} = this.props
        const url = this.genFetchUrl(this.storeName)
        onLoadPopularData(this.storeName,url)
    }
    genFetchUrl(key) {
        return URL + key + QUERY_STR
    }
    renderItem(data) {
        const item = data.item
        return <PopularItem
            item={item}
            onSelect={()=>{

            }}
        />
    }
    render() {
        const {tabLabel} = this.props;
        const {popular} = this.props
        let store = popular[this.storeName]
        if(!store){
            store = {
                items: [],
                isLoading: false
            }
        }
        return (
            <View style={styles.container}>
                 <FlatList
                    data={store.items}
                    renderItem={data => this.renderItem(data)}
                    keyExtractor={item=>""+item.id}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={store.isLoading}
                            onRefresh={()=>this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    popular: state.popular
})
const mapDispatchToProps = dispatch => ({
    onLoadPopularData: (storeName,url) => dispatch(actions.onLoadPopularData(storeName,url))
})

const PopularTabPage=connect(mapStateToProps,mapDispatchToProps)(PopularTab)

const styles = StyleSheet.create({

    container:{
        flex: 1
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
