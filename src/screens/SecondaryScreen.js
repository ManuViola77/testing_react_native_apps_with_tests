import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const SecondaryScreen = ({navigation, route}) => {
  const {
    paramOne,
    paramTwo: {content},
  } = route.params;

  return (
    <SafeAreaView testID="SecondaryScreen">
      <TouchableOpacity
        onPress={() => navigation.navigate('MainScreen')}
        testID="back-button">
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title} testID="title">
        This is Secondary Screen
      </Text>
      {!!paramOne && (
        <Text style={styles.text} testID="param-one">
          {paramOne}
        </Text>
      )}
      {!!content && (
        <Text style={styles.text} testID="param-two-content">
          {content}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default SecondaryScreen;
