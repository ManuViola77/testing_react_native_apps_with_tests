import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AnotherScreen = ({route}) => {
  const {
    paramOne,
    paramTwo: {content},
  } = route.params;
  return (
    <SafeAreaView>
      <Text>This is another Screen</Text>
      <Text>{paramOne}</Text>
      <Text>{content}</Text>
    </SafeAreaView>
  );
};

export default AnotherScreen;
