import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {style} from '../../../../helper/style';
const JoinNow = () => {
  return (
    <>
      <View
        style={[
          {
            marginHorizontal: '5%',
            borderRadius: 10,
            borderRadius: 10,
            borderColor: 'grey',
            elevation: 7,
            marginVertical: '3%',
            padding: '3%',
            paddingVertical: '15%',
            paddingBottom: '30%',
            paddingHorizontal: '10%',
          },
        ]}>
        <View style={[style.flexCenter, {marginVertical: '10%'}]}>
          <Text style={[{fontSize: 20}]}>Be The Vanguard Of</Text>
          <Text style={[style.textPurple, style.textbold, {fontSize: 40}]}>
            MovieGoers
          </Text>
        </View>
        <View
          style={[
            {
              borderColor: 'grey',
              borderWidth: 0.5,
              marginHorizontal: '5%',
              borderRadius: 10,
              paddingHorizontal: 15,
            },
          ]}>
          <TextInput
            placeholder="Type Your Email"
            placeholderTextColor={'grey'}
            keyboardType="email-address"
            autoCapitalize="none"
            style={[{paddingVertical: '5%', color: 'black'}]}
          />
        </View>
        <TouchableOpacity>
          <View
            style={[
              style.flexCenter,
              {
                marginTop: 10,
                backgroundColor: '#5f2eea',
                marginHorizontal: '5%',
                borderRadius: 10,
                paddingVertical: '1%',
                marginTop: 20,
              },
            ]}>
            <Text
              style={[
                style.textWhite,
                style.textbold,
                {fontSize: 20, paddingVertical: 5},
              ]}>
              Join Now
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[style.flexCenter, {marginTop: '5%'}]}>
          <Text style={([{fontSize: 15}], style.textBlack)}>
            By joining you as a Tickitz member,
          </Text>
          <Text style={[{fontSize: 15}, style.textBlack]}>
            we will always send you the{' '}
          </Text>
          <Text style={[{fontSize: 15}, style.textBlack]}>
            latest updates via email .
          </Text>
        </View>
      </View>
    </>
  );
};

export default JoinNow;
