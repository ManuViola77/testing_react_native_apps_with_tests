import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const AnotherScreen = ({navigation, route}) => {
  const {
    paramOne,
    paramTwo: {content},
  } = route.params;
  return (
    <SafeAreaView testID="AnotherScreen">
      <TouchableOpacity
        onPress={() => navigation.navigate('MainScreen')}
        testID="back-button">
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text testID="title">This is another Screen</Text>
      {!!paramOne && <Text testID="param-one">{paramOne}</Text>}
      {!!content && <Text testID="param-two-content">{content}</Text>}
    </SafeAreaView>
  );
};

export default AnotherScreen;
