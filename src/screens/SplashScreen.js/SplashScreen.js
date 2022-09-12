import React from 'react';
import {View, Text, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {style} from '../../../helper/style';
import {useEffect} from 'react';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeTabs');
    }, 1000);
  }, []);

  return (
    <>
      <View
        style={[
          style.bgWhite,
          {flex: 1},
          style.flexCenter,
          style.alignSelfCenter,
          {paddingHorizontal: '100%'},
        ]}>
        <Image
          source={require('../../../assets/Logo/TickitzLogo.png')}
          style={{
            width: 200,
            height: 150,
            resizeMode: 'contain',
          }}
        />
      </View>
    </>
  );
};

export default SplashScreen;
