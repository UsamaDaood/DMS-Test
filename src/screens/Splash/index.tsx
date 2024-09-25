import React, {useEffect, useRef} from 'react';
import {View, Image, Animated} from 'react-native';
/** Interfaces */
import {SplashProps} from '../../Interfaces/index';
//** Styles */
import {styles} from '../../Styles/SplashStyles';
/** Image Sources */
import {IC_APP_LOGO} from '../../utils/ImageSource';
/** Redux */

const SplashScreen: React.FC<SplashProps> = ({navigation}) => {
  const translateY = useRef(new Animated.Value(500)).current;
  useEffect(() => {
    handlingSplash();
  }, []);
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  // Getting Go to Screen
  const goToScreen = async () => {
    return 'SocialMediaFeed';
  };

  // Handling Splash Screen
  const handlingSplash = () => {
    setTimeout(async () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: await goToScreen(),
          },
        ],
      });
    }, 3500);
  };

  return (
    <View style={styles.centered}>
      <Animated.View style={{transform: [{translateY}]}}>
        <Image source={IC_APP_LOGO} style={styles.image} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
