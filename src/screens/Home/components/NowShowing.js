import React from 'react';
import {View} from 'react-native';
import {Nowshowingword} from './MovieWord';
import {NowShowingList} from './MovieList';
const NowShowing = ({navigation}) => {
  return (
    <>
      <View style={{paddingVertical: '10%'}}>
        <Nowshowingword />
        <NowShowingList navigation={navigation} />
      </View>
    </>
  );
};

export default NowShowing;
