import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {style} from '../../../../helper/style';

export const Banner = () => {
  return (
    <>
      <View style={{marginTop: '10%'}}>
        <View>
          <Text>Nearest Cinema,Newest Movie.</Text>
          <Text style={[style.textPurple, style.textbold, {fontSize: 35}]}>
            Find Out Now !
          </Text>
        </View>
        <View>
          <Image
            source={require('../../../../assets/Image/Banner.png')}
            style={{
              width: '100%',
              height: 500,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </>
  );
};
