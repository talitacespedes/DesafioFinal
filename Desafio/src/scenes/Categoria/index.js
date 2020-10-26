import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// Styles
import { Container, CellContainer } from './style';

import { formatPrice } from '../../utils/utils';

export default class Categoria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      categories: [],
      isLoading: true
    };
  }

  componentDidMount() {
    Promise.all([
        fetch("https://desafio-it-server.herokuapp.com/lancamentos"),
        fetch("https://desafio-it-server.herokuapp.com/categorias"),
    ])
    .then(async([res1, res2]) => {
        const releases = await res1.json();
        const categories = await res2.json();
        return [releases, categories];
    })
    .then(([releases, categories]) => {
        this.setState({
            isLoading: false,
            data: this.groupedReleases(releases),
            categories: categories
        });
    });
  }

  groupedReleases(list) {
    let group = list.reduce((items, item) => {
        items[item.categoria] = [...items[item.categoria] || [], item];
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
            category: key
        });
    });

    return groupedReleases;
  };

  renderCategory(category) {
    const { categories } = this.state;
      
    let name;
    categories && categories.map(cat => {
        if(cat.id == category){
            name = cat.nome;
        };
    });

    return name;
  };

  renderItem = ({ item, index }) => {
    return (
      <CellContainer>
        <Text>{formatPrice(item.total)}</Text>
        <Text>{this.renderCategory(item.category)}</Text>
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