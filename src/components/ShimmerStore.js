import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Animated } from 'react-native';

const HEIGHT = 165;

function ShimmerStore() {
  const [opacity] = React.useState(new Animated.Value(0.3));
  const { colors } = useTheme();

  React.useEffect(() => {
    function animateOpacity() {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 600,
          useNativeDriver: true,
        }).start(animateOpacity);
      });
    }
    // animateOpacity();
  }, [opacity]);

  return (
    <Animated.View style={[styles.container, { opacity, backgroundColor: '#ffffff' }]}>
      {/* <View style={{ flexDirection: 'row' }}> */}
      <View style={{ flex: 1 }}>
        <View style={{ flexGrow: 1 }}>
          <View style={{ fleex: 1, flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10, justifyContent: 'space-between' }}>
            <View style={{ fleex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.line(colors.border), styles.checkbox]} />
              <View style={[styles.line(colors.border), styles.task]} />
            </View>
            <View style={[styles.line(colors.border), styles.flag]} />
          </View>
        </View>
      </View>
      {/* </View> */}
    </Animated.View>
  );
}

const styles = {
  container: {
    borderRadius: 4,
    height: 40,
    width: '100%',
    marginBottom:10
  },
  right: borderColor => ({
    height: '100%',
    flex: 1,
    marginLeft: 25,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor,
  }),
  line: color => ({
    backgroundColor: color,
    borderRadius: 2,
  }),
  checkbox: {
    height: 30,
    width: 30,
  },
  task: {
    height: 30,
    width: '70%',
    marginLeft: 10
  },
  flag: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },

};



export const height = HEIGHT;
export default ShimmerStore;