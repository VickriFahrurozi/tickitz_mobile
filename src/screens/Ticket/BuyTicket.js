import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../components/Header';
import {style} from '../../../helper/style';
import {FlatList} from 'react-native';
import {useEffect, useState} from 'react';

const BuyTicket = ({navigation, route}) => {
  const data = route.params.data;
  const detail = route.params.detail;
  const [Choose, setChoose] = useState([]);

  const seatlist = {
    seatdata: [
      {name: 'A1'},
      {name: 'A2'},
      {name: 'A3'},
      {name: 'A4'},
      {name: 'A5'},
      {name: 'A6'},
      {name: 'A7'},
      {name: 'A8'},
      {name: 'A9'},
      {name: 'A10'},
      {name: 'B1'},
      {name: 'B2'},
      {name: 'B3'},
      {name: 'B4'},
      {name: 'B5'},
      {name: 'B6'},
      {name: 'B7'},
      {name: 'B8'},
      {name: 'B9'},
      {name: 'B10'},
      {name: 'C1'},
      {name: 'C2'},
      {name: 'C3'},
      {name: 'C4'},
      {name: 'C5'},
      {name: 'C6'},
      {name: 'C7'},
      {name: 'C8'},
      {name: 'C9'},
      {name: 'C10'},
      {name: 'D1'},
      {name: 'D2'},
      {name: 'D3'},
      {name: 'D4'},
      {name: 'D5'},
      {name: 'D6'},
      {name: 'D7'},
      {name: 'D8'},
      {name: 'D9'},
      {name: 'D10'},
      {name: 'E1'},
      {name: 'E2'},
      {name: 'E3'},
      {name: 'E4'},
      {name: 'E5'},
      {name: 'E6'},
      {name: 'E7'},
      {name: 'E8'},
      {name: 'E9'},
      {name: 'E10'},
      {name: 'F1'},
      {name: 'F2'},
      {name: 'F3'},
      {name: 'F4'},
      {name: 'F5'},
      {name: 'F6'},
      {name: 'F7'},
      {name: 'F8'},
      {name: 'F9'},
      {name: 'F10'},
      {name: 'G1'},
      {name: 'G2'},
      {name: 'G3'},
      {name: 'G4'},
      {name: 'G5'},
      {name: 'G6'},
      {name: 'G7'},
      {name: 'G8'},
      {name: 'G9'},
      {name: 'G10'},
      {name: 'H1'},
      {name: 'H2'},
      {name: 'H3'},
      {name: 'H4'},
      {name: 'H5'},
      {name: 'H6'},
      {name: 'H7'},
      {name: 'H8'},
      {name: 'H9'},
      {name: 'H10'},
      {name: 'I1'},
      {name: 'I2'},
      {name: 'I3'},
      {name: 'I4'},
      {name: 'I5'},
      {name: 'I6'},
      {name: 'I7'},
      {name: 'I8'},
      {name: 'I9'},
      {name: 'I10'},
      {name: 'J1'},
      {name: 'J2'},
      {name: 'J3'},
      {name: 'J4'},
      {name: 'J5'},
      {name: 'J6'},
      {name: 'J7'},
      {name: 'J8'},
      {name: 'J9'},
      {name: 'J10'},
    ],
  };

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <Header navigation={navigation} />
      </View>
      <ScrollView style={[style.bgWhite]}>
        <View style={[style.flexCenter, {marginTop: '5%'}]}>
          <Text style={[style.textBlack, style.textbold, {fontSize: 15}]}>
            {detail.item.cinema_name} - {detail.item.cinema_city.toUpperCase()}
          </Text>
          <Text style={[style.textBlack, style.textbold, {fontSize: 15}]}>
            {detail.date.toUTCString().slice(0, 17)} - {detail.time}
          </Text>
          <Text
            style={[
              style.textBlack,
              style.textbold,
              style.textPurple,
              {fontSize: 25},
            ]}>
            {data.title}
          </Text>
        </View>

        <View style={{paddingHorizontal: '5%'}}>
          <FlatList
            extraData={seatlist.seatdata}
            key={10}
            numColumns={10}
            horizontal={false}
            data={seatlist.seatdata}
            renderItem={({item, index}) => {
              return (
                <>
                  {index + 1 == 12 ||
                  index + 1 == 22 ||
                  index + 1 == 32 ||
                  index + 1 == 42 ||
                  index + 1 == 52 ||
                  index + 1 == 62 ||
                  index + 1 == 72 ||
                  index + 1 == 82 ||
                  index + 1 == 92 ? (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                          setChoose(prevdata => [...prevdata, item.name]);
                        }}
                        style={[
                          {
                            marginHorizontal: '1%',
                            marginRight: '6%',
                            marginVertical: '2%',
                            flex: 2,

                            backgroundColor: 'green',
                            borderRadius: 5,
                            border: 1,
                            borderWidth: 1,
                            borderColor: 'black',
                          },
                        ]}>
                        <View style={[style.flexCenter]}>
                          <Text style={[style.textWhite, {fontSize: 12}]}>
                            {item.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      {index + 1 == 19 ||
                      index + 1 == 29 ||
                      index + 1 == 39 ||
                      index + 1 == 49 ||
                      index + 1 == 59 ||
                      index + 1 == 69 ||
                      index + 1 == 79 ||
                      index + 1 == 89 ||
                      index + 1 == 99 ? (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              setChoose(prevdata => [...prevdata, item.name]);
                            }}
                            style={{
                              marginHorizontal: '1%',
                              marginLeft: '6%',
                              marginVertical: '2%',
                              flex: 2,

                              backgroundColor: 'green',
                              borderRadius: 5,
                              border: 1,
                              borderWidth: 1,
                              borderColor: 'black',
                            }}>
                            <View style={[style.flexCenter]}>
                              <Text style={[style.textWhite, {fontSize: 12}]}>
                                {item.name}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          {index + 1 <= 10 ? (
                            <>
                              {(index + 1) % 2 == 0 &&
                              index + 1 != 10 &&
                              index + 1 != 9 ? (
                                <>
                                  <TouchableOpacity
                                    onPress={() => {
                                      setChoose(prevdata => [
                                        ...prevdata,
                                        item.name,
                                      ]);
                                    }}
                                    style={{
                                      marginVertical: '2%',
                                      marginRight: '5%',
                                      marginLeft: '-5%',
                                      flex: 2,
                                      padding: '1%',
                                      paddingBottom: '8%',
                                      backgroundColor: 'red',
                                      borderRadius: 5,
                                    }}></TouchableOpacity>
                                </>
                              ) : (
                                <>
                                  {index + 1 == 9 ? (
                                    <>
                                      <TouchableOpacity
                                        onPress={() => {
                                          setChoose(prevdata => [
                                            ...prevdata,
                                            item.name,
                                          ]);
                                        }}
                                        style={{
                                          marginVertical: '2%',
                                          marginRight: '-5%',
                                          flex: 2,
                                          padding: '1%',
                                          paddingBottom: '8%',
                                          backgroundColor: 'red',
                                          borderRadius: 5,
                                        }}></TouchableOpacity>
                                    </>
                                  ) : (
                                    <>
                                      <TouchableOpacity
                                        onPress={() => {
                                          setChoose(prevdata => [
                                            ...prevdata,
                                            item.name,
                                          ]);
                                        }}
                                        style={{
                                          marginVertical: '2%',
                                          flex: 2,
                                          padding: '1%',
                                          paddingBottom: '8%',
                                          backgroundColor: 'red',
                                          borderRadius: 5,
                                        }}></TouchableOpacity>
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setChoose(prevdata => [
                                    ...prevdata,
                                    item.name,
                                  ]);
                                }}
                                style={{
                                  marginHorizontal: '1%',
                                  marginVertical: '2%',
                                  flex: 2,

                                  backgroundColor: 'green',
                                  borderRadius: 5,
                                  border: 1,
                                  borderWidth: 1,
                                  borderColor: 'black',
                                }}>
                                {index + 1 == 100 ? (
                                  <>
                                    <View style={[{flex: 1}, style.flexCenter]}>
                                      <Text
                                        style={[
                                          style.textWhite,
                                          {fontSize: 12},
                                        ]}>
                                        {item.name}
                                      </Text>
                                    </View>
                                  </>
                                ) : (
                                  <>
                                    <View style={[{flex: 1}, style.flexCenter]}>
                                      <Text
                                        style={[
                                          style.textWhite,
                                          {fontSize: 12},
                                        ]}>
                                        {item.name}
                                      </Text>
                                    </View>
                                  </>
                                )}
                              </TouchableOpacity>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              );
            }}
          />
        </View>

        <View
          style={[
            style.flexCenter,
            {
              marginTop: '4%',
              marginBottom: '8%',
              padding: 2,
              flex: 1,
              backgroundColor: '#5f2eea',
              marginHorizontal: '10%',
              borderRadius: 10,
            },
          ]}>
          <Text style={[{fontSize: 15}, style.textbold]}>SCREEN</Text>
        </View>
        <View style={[style.flexCenter]}>
          <Text style={[{fontSize: 15}, style.textbold, style.textBlack]}>
            Choosed Seat = {Choose}
          </Text>
          <Text style={[{fontSize: 15}, style.textbold, style.textBlack]}>
            Total Price = {Choose.length * 50000}
          </Text>
        </View>
        <TouchableOpacity
          style={{paddingBottom: '20%'}}
          onPress={() => {
            {
              navigation.navigate('CheckOut', {
                data: data,
                detail: detail,
                choose: Choose,
              });
            }
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
              style={[style.textPurple, {fontSize: 15, paddingVertical: 10}]}>
              CheckOut
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default BuyTicket;
