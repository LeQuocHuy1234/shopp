import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Button } from 'react-native';
import {deleteToCart} from '../../../actions/place';
import {connect} from 'react-redux';

const win = Dimensions.get('window');

export class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={{ flexDireaction: 'row' }}>
        <View style={styles.listItem}>
          <View>
            <Image 
              source = {{ uri: "http://192.168.1.68:8000/storage/product/" + this.props.item.image_product.img }} 
              style={{width: '50%', height: win.height*1/4}}  
            />
          </View>
          <Text>{ this.props.item.product_code }</Text>
          <Text>{ this.props.item.qty }</Text>
          <Button 
            title = "xoa"
            onPress = {() => this.props.deleteCart(this.props.item.id) }
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  },
});

const mapDispatchToProps = dispatch => {
  return {
    deleteCart: (data) => {
      dispatch(deleteToCart(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItem)