import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {style} from '../../../helper/style';
import Header from '../components/Header';
import {useRoute} from '@react-navigation/native';
const UpcomingDetail = ({navigation, route}) => {
  // const route = useRoute();
  // route.params.data;
  const data = route.params.data;
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <Header navigation={navigation} />
      </View>
      <ScrollView style={[style.bgWhite]}>
        <View
          style={[
            style.flexCenter,
            {
              marginHorizontal: '18%',
              marginTop: '10%',
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
            },
          ]}>
          <Image
            source={{
              uri: `https://walrus-app-req5v.ondigitalocean.app/uploads/${data.cover}`,
            }}
            style={{
              width: 200,
              height: 280,
              resizeMode: 'contain',
              margin: '15%',
            }}
          />
        </View>
        <View style={[style.flexCenter, {marginTop: '6%'}]}>
          <Text style={[style.textBlack, style.textbold, {fontSize: 25}]}>
            {data.title}
          </Text>
          <Text style={[style.textBlack, {fontSize: 20, marginTop: '1%'}]}>
            {data.movie_category}
          </Text>
        </View>

        <View style={{paddingBottom: '15%'}}>
          <View
            style={[style.flexRow, {marginLeft: '20%', paddingVertical: '5%'}]}>
            <View style={[{flex: 1}]}>
              <Text style={[style.textPurple, style.textbold, {fontSize: 16}]}>
                Release Date
              </Text>
              <Text style={[style.textBlack, style.textbold, {fontSize: 15}]}>
                {data.release_date.slice(8, 10)}
                {data.release_date.slice(4, 8)}
                {data.release_date.slice(0, 4)}
              </Text>
            </View>

            <View style={{flex: 1}}>
              <Text style={[style.textPurple, style.textbold, {fontSize: 16}]}>
                Directed By
              </Text>
              <Text style={[style.textBlack, style.textbold, {fontSize: 15}]}>
                {data.director}
              </Text>
            </View>
          </View>
          <View style={[style.flexRow, {marginLeft: '20%'}]}>
            <View style={{flex: 1}}>
              <Text style={[style.textPurple, style.textbold, {fontSize: 16}]}>
                Duration
              </Text>
              <Text style={[style.textBlack, style.textbold, {fontSize: 15}]}>
                {data.duration_hours} hrs {data.duration_minute} min
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[style.textPurple, style.textbold, {fontSize: 16}]}>
                Casts
              </Text>
              <Text style={[style.textBlack, style.textbold, {fontSize: 15}]}>
                {data.casts}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderWidth: 0.6,
            marginHorizontal: '5%',
            borderColor: '#F5F5F5',
          }}></View>

        <View style={{marginHorizontal: '7%', paddingVertical: '5%'}}>
          <Text
            style={[
              style.textbold,
              {marginBottom: '5%', color: 'black', fontSize: 25},
            ]}>
            Synopsis
          </Text>
          <Text style={[{fontSize: 18, color: 'grey'}]}>
            {data.description}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default UpcomingDetail;
