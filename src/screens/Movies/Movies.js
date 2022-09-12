import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {style} from '../../../helper/style';
import Header from '../components/Header';
import {ListMovie} from './components/MovieList';
import {useEffect} from 'react';
import {useSelector} from 'react-redux/es/exports';

const Movies = ({navigation}) => {
  // const data = useSelector(state => state.auth);
  // useEffect(() => {
  //   if (!data?.data?.token) {
  //     navigation.navigate('SignIn');
  //   }
  // }, []);
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <Header navigation={navigation} />
      </View>
      <ScrollView>
        <View style={{backgroundColor: '#F5F6F8', paddingHorizontal: '5%'}}>
          <ListMovie navigation={navigation} />
        </View>
      </ScrollView>
    </>
  );
};
export default Movies;
