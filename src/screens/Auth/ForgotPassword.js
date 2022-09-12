import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {style, mainAuth, Auth} from '../../../helper/style';
import {useState} from 'react';

const ForgotPassword = ({navigation}) => {
  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={[mainAuth.body]}>
          <View style={[style.flexRow]}>
            <Image
              source={require('../../../assets/Logo/TickitzLogo.png')}
              style={{
                width: 100,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={[Auth.header, {marginBottom: '10%'}]}>
            <Text style={[style.textBlack, style.textbold, {fontSize: 35}]}>
              Forgot Password
            </Text>
            <Text>we'll send a link to your email shortly</Text>
          </View>
          <View>
            <View>
              <Text style={[style.textBlack]}>Email</Text>
            </View>
            <View style={[style.inputBox]}>
              <TextInput
                placeholder="Write Your Email Address"
                placeholderTextColor={'grey'}
                keyboardType="email-address"
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              style.flexCenter,
              style.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[style.textWhite, style.textbold]}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={[style.flexCenter, {marginTop: '1%'}]}>
          <Pressable
            onPress={() => navigation.navigate('SignIn')}
            android_ripple={{color: 'purple'}}>
            <Text style={[{marginBottom: '2%', color: 'black'}]}>
              Already Have An Account ?{' '}
              <Text
                style={[
                  style.textPurple,
                  style.textbold,
                  {textDecorationLine: 'underline'},
                ]}>
                Sign In
              </Text>
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('SignUp')}
            android_ripple={{color: 'purple'}}>
            <Text style={[{flex: 1, color: 'black'}]}>
              Dont't Have An Account ?{' '}
              <Text
                style={[
                  style.textPurple,
                  style.textbold,
                  {textDecorationLine: 'underline'},
                ]}>
                Sign Up
              </Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;
