import React from 'react';
import { Text, View } from 'react-native';

export default function Mes({ route }) {
    return (
      <View>
        <Text>Por mês {route.params?.nome}</Text>
      </View>
    );
}

