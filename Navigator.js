/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import ProductScreen from './src/component/product/ProductScreen';
import CartScreen from './src/component/cart/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductDetailScreen from './src/component/product/ProductDetailScreen';

const StackNavigator = createStackNavigator({
    Home:ProductScreen,
    ProductDetailScreen: ProductDetailScreen,
});

const AppNavigator = createBottomTabNavigator({
    Home: StackNavigator,
    Cart: CartScreen,
},
{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if(routeName === 'Home') {
                iconName = 'ios-home'
            } else if (routeName === 'Cart') {
                iconName = 'ios-cart'
            }

            return <IconComponent name={iconName} size={25} color={tintColor} />
        }
    }),
    // tabBarOptions: {
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    // },
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;