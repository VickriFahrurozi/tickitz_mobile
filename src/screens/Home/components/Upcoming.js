import React from 'react';
import {View} from 'react-native';
import {Upcomingword} from './MovieWord';
import {UpcomingList} from './MovieList';
const Upcoming = ({navigation}) => {
  return (
    <>
      <View style={{paddingVertical: '10%'}}>
        <Upcomingword />
        <UpcomingList navigation={navigation} />
      </View>
    </>
  );
};

export default Upcoming;
