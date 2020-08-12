import React from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const MainScreen = ({navigation}) => {
  const goToSecondaryScreen = () =>
    navigation.navigate('SecondaryScreen', {
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
        onPress={goToSecondaryScreen}
        style={styles.button}
        testID="button-to-secondary-screen">
        <Text style={styles.buttonText}>
          Press here to go to Secondary Screen
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
