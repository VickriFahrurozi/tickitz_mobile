import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {style} from '../../../helper/style';
import Header from '../components/Header';
import {useRoute} from '@react-navigation/native';
import {getCinema} from '../../redux/actions/cinema';
import DatePicker from 'react-native-date-picker';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

const MovieDetail = ({navigation, route}) => {
  // const route = useRoute();
  // route.params.data;
  const dispatch = useDispatch();
  const cinema = useSelector(state => state.cinema);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [City, setCity] = useState('No City Selected');
  const [time, setTime] = useState();

  const data = route.params.data;
  const kota = ['Jakarta', 'Bogor', 'Depok', 'Bekasi', 'Tangerang'];

  useEffect(() => {
    dispatch(getCinema());
  }, []);

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
        <View style={[{backgroundColor: '#f5f6f8', paddingVertical: '10%'}]}>
          <View style={[style.flexCenter, {marginBottom: '8%'}]}>
            <Text style={[style.textBlack, style.textbold, {fontSize: 20}]}>
              Showtimes and Tickets
            </Text>
          </View>
          <View style={[{marginBottom: '4%'}]}>
            <View
              style={[
                {
                  backgroundColor: '#eff0f6',
                  marginHorizontal: '10%',
                  paddingHorizontal: '7%',
                  paddingVertical: '3%',
                  borderRadius: 10,
                },
                style.flexBetween,
                style.flexRow,
              ]}>
              <View style={[style.flexRow]}>
                <View>
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Image
                      source={require('../../../assets/Logo/Calendar.png')}
                      style={{width: 30, height: 30}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={[style.flexCenter, {marginLeft: '5%'}]}>
                  <Text style={[style.textBlack, style.textbold]}>
                    {date.toUTCString().slice(0, 17)}
                  </Text>
                </View>
              </View>
              <View style={[style.flexCenter]}>
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <Image
                    source={require('../../../assets/Logo/ExpandArrow.png')}
                    style={[{width: 15, height: 15}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[{marginBottom: '2%'}]}>
            <View
              style={[
                {
                  backgroundColor: '#eff0f6',
                  marginHorizontal: '10%',
                  paddingHorizontal: '7%',
                  paddingVertical: '3%',
                  borderRadius: 10,
                },
                style.flexBetween,
                style.flexRow,
              ]}>
              <View style={[style.flexRow]}>
                <View style={[style.alignSelfCenter]}>
                  <Image
                    source={require('../../../assets/Logo/Location.png')}
                    style={{width: 30, height: 30}}
                  />
                </View>
                <View style={[style.flexCenter, {marginLeft: '5%'}]}>
                  <SelectDropdown
                    data={kota}
                    defaultButtonText="Select City"
                    buttonStyle={{
                      backgroundColor: '#eff0f6',
                      margin: 0,
                    }}
                    onSelect={(selectedItem, index) => {
                      setCity(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item;
                    }}
                  />
                </View>
                <View style={[style.flexCenter]}>
                  <Image
                    source={require('../../../assets/Logo/ExpandArrow.png')}
                    style={[{width: 15, height: 15}]}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
        />
        <View style={{backgroundColor: '#f5f6f8', paddingBottom: '5%'}}>
          <FlatList
            horizontal={false}
            data={cinema.data.data}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  backgroundColor: '#333',
                  marginVertical: '0%',
                }}
              />
            )}
            renderItem={({item, index}) => {
              return (
                <>
                  {City == 'No City Selected' ? (
                    <></>
                  ) : (
                    <>
                      {item.cinema_city.toLowerCase() == City.toLowerCase() ? (
                        <>
                          <View
                            style={{
                              margin: '2%',
                              borderRadius: 20,

                              backgroundColor: 'white',
                              marginHorizontal: '8%',
                              paddingBottom: '8%',
                            }}>
                            <View style={[style.flexCenter]}>
                              <Image
                                source={{
                                  uri: `https://walrus-app-req5v.ondigitalocean.app/uploads/${item.cinema_brand.toLowerCase()}.png`,
                                }}
                                style={{
                                  width: 80,
                                  height: 70,
                                  resizeMode: 'contain',
                                }}
                              />
                            </View>
                            <View style={[style.flexCenter]}>
                              <Text style={[style.textBlack, {fontSize: 15}]}>
                                {item.cinema_address}
                              </Text>
                              <Text style={[style.textBlack, {fontSize: 15}]}>
                                {item.cinema_city}
                              </Text>
                            </View>
                            <View
                              style={{
                                borderWidth: 0.3,
                                marginTop: '8%',
                                marginHorizontal: '5%',
                              }}></View>

                            <View>
                              <View
                                style={[
                                  style.flexRow,
                                  style.flexAround,
                                  {marginVertical: '5%'},
                                ]}>
                                <TouchableOpacity
                                  onPress={setTime('10:00 am')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    10:00 am
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={setTime('12:00 am')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    12:00 am
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={setTime('02:00 pm')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    02:00 pm
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={setTime('04:00 pm')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    04:00 pm
                                  </Text>
                                </TouchableOpacity>
                              </View>
                              <View style={[style.flexRow, style.flexAround]}>
                                <TouchableOpacity
                                  onPress={setTime('06:00 pm')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    06:00 pm
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={setTime('08:00 pm')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    08:00 pm
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={setTime('10:00 pm')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    10:00 pm
                                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={setTime('12:00 pm')}
                                  style={{backgroundColor: '#f5f6f8'}}>
                                  <Text style={[style.textBlack]}>
                                    12:00 pm
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                            <View
                              style={[style.flexCenter, {paddingTop: '7%'}]}>
                              <Text
                                style={[
                                  style.textBlack,
                                  style.textbold,
                                  {fontSize: 15},
                                ]}>
                                Rp.50000
                              </Text>
                            </View>
                            <TouchableOpacity
                              style={{paddingBottom: '0%', marginTop: '5%'}}
                              onPress={() => {
                                City == 'No City Selected' ? (
                                  <>{alert('City Not Selected !')}</>
                                ) : (
                                  <>
                                    {navigation.navigate('BuyTicket', {
                                      data: data,
                                      detail: {City, date, time, item},
                                    })}
                                  </>
                                );
                              }}>
                              <View
                                style={[
                                  style.flexCenter,
                                  {
                                    marginTop: 10,
                                    backgroundColor: 'white',
                                    marginHorizontal: '5%',
                                    borderRadius: 5,
                                    borderColor: '#5f2eea',
                                    borderWidth: 1,
                                  },
                                ]}>
                                <Text
                                  style={[
                                    style.textPurple,
                                    {fontSize: 15, paddingVertical: 10},
                                  ]}>
                                  Choose Seat
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default MovieDetail;
