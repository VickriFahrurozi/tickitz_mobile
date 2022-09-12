import React from 'react';
import {View, Text, Image} from 'react-native';
import {style} from '../../../helper/style';
import {useState, useEffect} from 'react';

const BottomNav = ({navigation}, page) => {
  const [color, setcolor] = useState({
    home: '#F5F5F5',
    movies: 'white',
  });

  useEffect(() => {
    if (page == 'home') {
      setcolor(prevdata => ({
        ...prevdata,
        home: '#F5F5F5',
        movies: 'white',
      }));
    } else if (page == 'movies') {
      setcolor(prevdata => ({
        ...prevdata,
        movies: '#F5F5F5',
        home: 'white',
      }));
    }
  }, []);
  return (
    <>
      <View
        style={[
          style.flexRow,
          {
            borderBottomColor: 'grey',
            borderWidth: 0.5,
          },
        ]}>
        <View
          style={[
            style.flexCenter,
            {flex: 1, backgroundColor: `${color.home}`},
          ]}>
          <View
            style={[style.flexCenter, {paddingTop: '3%', paddingBottom: '1%'}]}>
            <Image
              source={require('../../../assets/Logo/Home.png')}
              style={{width: 20, height: 20, marginBottom: '-3%'}}
            />
            <Text style={{color: '#5F2EEA', fontSize: 15, fontWeight: 'bold'}}>
              Home
            </Text>
          </View>
        </View>
        <View style={[style.flexCenter, {flex: 1}]}>
          <View
            style={[style.flexCenter, {paddingTop: '3%', paddingBottom: '1%'}]}>
            <Image
              source={require('../../../assets/Logo/Movies.png')}
              style={{width: 25, height: 20, marginBottom: '-3%'}}
            />
            <Text style={{color: '#5F2EEA', fontSize: 15, fontWeight: 'bold'}}>
              Movies
            </Text>
          </View>
        </View>
        <View style={[style.flexCenter, {flex: 1}]}>
          <View
            style={[style.flexCenter, {paddingTop: '3%', paddingBottom: '1%'}]}>
            <Image
              source={require('../../../assets/Logo/Movies.png')}
              style={{width: 25, height: 20, marginBottom: '-3%'}}
            />
            <Text style={{color: '#5F2EEA', fontSize: 15, fontWeight: 'bold'}}>
              Movies
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default BottomNav;
