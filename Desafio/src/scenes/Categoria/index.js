import React from 'react';
import { Text, View } from 'react-native';

export default function Categoria({ route }) {
    return (
      <View>
        <Text>Por categoria {route.params?.nome}</Text>
      </View>
    );
}

