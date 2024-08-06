import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Customdrawer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Screen1')}
      >
        <Text>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Screen2')}
      >
        <Text>Screen 2</Text>
      </TouchableOpacity>
      {/* Add more items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Customdrawer;
