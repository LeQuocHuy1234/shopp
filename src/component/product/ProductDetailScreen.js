/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addToCart } from '../../../actions/place';
import {connect} from 'react-redux';

const win = Dimensions.get('window');
class ProductDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qty: 1,
      dataCart: {},
    }
  }

  static navigationOptions = {
    title: 'Sản Phẩm',
  };

  ShowPrice() {
    if(this.props.navigation.getParam('item').price_sale) {
      return (
          <View style = {{ flex:1, flexDirection:'row' }}>
            <Text style = {{ fontWeight: '100', margin:2, color: 'red', flex:1 } }>{ this.props.navigation.getParam('item').price_sale }đ</Text>
            <Text style = {{ textDecorationLine: 'line-through', flex:1 }}>{ this.props.navigation.getParam('item').price }đ</Text>  
          </View>
      )
    }
    return (
        <Text style = {{ fontWeight: '100', margin:2, color: 'red' }}>{ this.props.navigation.getParam('item').price }đ</Text>
    )
  }

    addCart = () => {
        let item =  this.props.navigation.getParam('item');
        let dataCart = {
          id: item.id,
          product_code: item.product_code,
          image_product: item.image_product,
          qty: this.state.qty
        }
        this.props.addToCart(dataCart)
    }

  render() {
    const item  = this.props.navigation.getParam('item');
    return (
      <View style={styles.container}>
       <View>
       <Image 
          source = {{ uri: "http://192.168.1.68:8000/storage/product/" + item.image_product.img }} 
          style={{width: '100%', height: win.height*1/4}}  
        />
        <Text style={styles.welcome}>{ item.product_code }</Text>
        <View>
        { this.ShowPrice() }
        <Text>Số lượng</Text>
        <View style={{ padding: 5, flexDirection: 'row' }}>
          <View style={{  }}><Ionicons name="ios-add" size={25} onPress ={() => {
            let qty = this.state.qty + 1;
            this.setState({
              qty: qty
            })
          }}/></View>
          <Text style={{ margin: 4 }}>{ this.state.qty }</Text>
          <View style={{  }}><Ionicons name="ios-remove" size={25} 
          onPress ={() => {
            let qty = this.state.qty != 1 ? this.state.qty - 1 : this.state.qty;
            this.setState({
              qty: qty
            })
          }}/>
          </View>
        </View>
        <View>
          <Button
          title="Gio Hang"
          onPress={ this.addCart }
          />
        </View>
        </View>
       </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (data) => {
      dispatch(addToCart(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductDetailScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    flex: 1,
  },
  welcome:{
    color : 'black',
    padding: 3
  }
});
