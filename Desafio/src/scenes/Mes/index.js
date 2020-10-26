import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// Styles
import { Container, CellContainer } from './style';

import { formatPrice, formatMonth } from '../../utils/utils';

export default class Mes extends Component {
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
        this.setState({ data: this.groupedReleases(json) });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  groupedReleases(list) {
    let group = list.reduce((items, item) => {
        items[item.mes_lancamento] = [...items[item.mes_lancamento] || [], item];
        return items;
    }, {});

    let groupedReleases = [];
    Object.entries(group).map(([key, value]) => {
        let total = 0
        value.map(item => {
            return total += item.valor
        });

        return groupedReleases.push({
            total: total,
            month: key
        });
    });

    return groupedReleases;
  };

  renderItem = ({ item, index }) => {
    return (
      <CellContainer>
        <Text>{formatPrice(item.total)}</Text>
        <Text>{formatMonth(item.month)}</Text>
      </CellContainer>
    );
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <Container>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => index}
            renderItem={this.renderItem}
          />
        )}
      </Container>
    );
  }
};