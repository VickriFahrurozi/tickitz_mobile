import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../../../../helper/style';
export const Nowshowingword = () => {
  return (
    <>
      <View style={[style.flexRow, style.flexCenter, {paddingBottom: '5%'}]}>
        <Text style={[style.textPurple, style.textbold, {fontSize: 25}]}>
          Now Showing
        </Text>
      </View>
    </>
  );
};
export const Upcomingword = () => {
  return (
    <>
      <View style={[style.flexRow, style.flexCenter, {paddingBottom: '5%'}]}>
        <Text style={[style.textBlack, style.textbold, {fontSize: 25}]}>
          Upcoming Movies
        </Text>
      </View>
    </>
  );
};
