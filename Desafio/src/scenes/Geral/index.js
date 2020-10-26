import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// Styles
import { CellContainer } from './style';

import { formatPrice } from '../../utils/utils';

export default class Geral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://desafio-it-server.herokuapp.com/lancamentos')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  renderItem = ({ item, index }) => {
    return (
      <CellContainer>
        <Text>{formatPrice(item.valor)}</Text>
        <Text>{item.origem}</Text>
      </CellContainer>
    );
}

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
};