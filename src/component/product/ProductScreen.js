/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import { getAllProduct } from '../../../api/ApiCall';
import { FlatList } from 'react-native-gesture-handler';

const win = Dimensions.get('window');
export default class ProductScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }

    componentDidMount(){
        getAllProduct('/api/products').then((json) => {
            this.setState({
                products: json.data
            })
        }).catch((error) => {
            return error; 
        })
    }

    static navigationOptions = {
        headerTitle:<Image source={require('../../image/logo/logo.png')} style={{width: 70, height: 30}}/>,
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center'
        },
        headerRight: <Text style={{ fontWeight:'bold', paddingRight: 3 }}>Trang chủ</Text>
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <FlatList
                        data = { this.state.products }
                        renderItem={({item}) => (
                            <ItemProduct navigation={this.props.navigation} item = {item} keyExtractor = {(item) => item.color} />
                        )}
                        
                    />
                </View>
            </View>
        );
    }
}


class ItemProduct extends Component {
    render() {
        return (
           <View style={styles.GridViewContainer}>
                <View style={styles.GridViewTextLayout} onPress={() => this.props.navigation.navigate('ProductDetailScreen',{
                    item: this.props.item
                })}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetailScreen',{
                    item: this.props.item
                })}  >
                        <Image 
                            source = {{ uri: "http://192.168.1.72:8000/storage/product/" + this.props.item.image_product.img }} 
                            style={{width: '100%', height: win.height*1/4}}  
                        />
                    </TouchableHighlight>
                    <Text onPress={() => this.props.navigation.navigate('ProductDetailScreen',{
                        item: this.props.item
                    })}>{ this.props.item.product_code }</Text>
                    {
                        this.props.item.price_sale !== 0 ?
                        <View style = {{ flex:1, flexDirection:'row' }}>
                        <Text style = {{ fontWeight: '100', margin:2, color: 'red', flex:1 }} onPress={() => this.props.navigation.navigate('ProductDetailScreen',{
                            item: this.props.item
                        })}>{ this.props.item.price_sale }đ</Text>
                        <Text style = {{ textDecorationLine: 'line-through', flex:1 }} onPress={() => this.props.navigation.navigate('ProductDetailScreen',{
                            item: this.props.item
                        })}>{ this.props.item.price }đ</Text>  
                        </View>
                        :
                        <Text style = {{ fontWeight: '100', margin:2, color: 'red' }} onPress={() => this.props.navigation.navigate('ProductDetailScreen')}>{ this.props.item.price }đ</Text>
                     }
                </View>
           </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
      },
      GridViewContainer: {
       flex:1,
       justifyContent: 'center',
       margin: 5,
       backgroundColor: 'white'
    },
});
