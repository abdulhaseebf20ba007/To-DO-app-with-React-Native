import * as React from 'react';
import {StyleSheet, View,  Dimensions} from 'react-native';
const SCREEN = Dimensions.get('window');

function ShimmerLoading(props) {
  const {Component, height, style, staticCount} = props;
  const count = parseInt(SCREEN.height / height, 10) +1;
  const listData = Array.from(Array(staticCount ?? count)).map(
    (arg, index) => index,
  );
  return (
    <View style={[styles.container, style]}>
      {listData.map(value => (
        <Component key={value} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN.height,
  },
});

export default ShimmerLoading;
