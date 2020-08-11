import React from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity} from 'react-native';

const MainScreen = ({navigation}) => {
  const goToAnotherScreen = () =>
    navigation.navigate('AnotherScreen', {
      paramOne: 'This is a parameter that is a text',
      paramTwo: {
        content: 'This is a parameter that is an object with a content',
      },
    });

  const showAlert = () => {
    Alert.alert('This is the alert title', 'This is the alert message', [
      {text: 'ok'},
    ]);
  };
  return (
    <SafeAreaView testID="MainScreen">
      <TouchableOpacity
        onPress={goToAnotherScreen}
        testID="button-to-another-screen">
        <Text>Press here to go to another screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showAlert} testID="alert-button">
        <Text>Press to show alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
