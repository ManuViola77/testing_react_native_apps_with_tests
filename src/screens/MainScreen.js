import React from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

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
        style={styles.button}
        testID="button-to-another-screen">
        <Text style={styles.buttonText}>
          Press here to go to another screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={showAlert}
        style={styles.button}
        testID="alert-button">
        <Text style={styles.buttonText}>Press to show alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
