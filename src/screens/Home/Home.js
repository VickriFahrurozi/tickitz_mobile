import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {style} from '../../../helper/style';
import {Banner} from './components/Banner';
import NowShowing from './components/NowShowing';
import Upcoming from './components/Upcoming';
import Header from '../components/Header';
import JoinNow from './components/JoinNow';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import BottomNav from '../components/BottomNav';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
export const Home = ({navigation}) => {
  const data = useSelector(state => state.auth);
  useEffect(() => {
    if (!data.data.token) {
      navigation.navigate('SignIn');
    }
  }, [data]);

  useEffect(() => {
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
    // return unsubscribe;
  }, []);
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <Header navigation={navigation} />
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: '5%'}}>
          <Banner />
        </View>
        <View style={{backgroundColor: '#D6D8E7'}}>
          <NowShowing navigation={navigation} />
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Upcoming navigation={navigation} />
        </View>
        <View style={{backgroundColor: 'white', marginBottom: '15%'}}>
          <JoinNow />
        </View>
      </ScrollView>
      {/* <View style={{backgroundColor: 'white'}}>
        <BottomNav page={'home'} />
      </View> */}
    </>
  );
};
