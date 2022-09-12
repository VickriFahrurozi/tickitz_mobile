import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {View, Text, TextInput} from 'react-native';
import {style} from '../../../../helper/style';
import {useDispatch, useSelector} from 'react-redux';
import {getNowShowingMovies} from '../../../redux/actions/movies';
import {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
export const ListMovie = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies);
  let totalpage = Array(data.data.totalpage).fill();
  const [Pagination, setPagination] = useState({
    limit: 4,
    page: 1,
  });
  useEffect(() => {}, []);
  return (
    <>
      <View style={{paddingVertical: '5%'}}>
        <View style={[style.flexCenter, {marginBottom: '6%'}]}>
          <Text style={[style.textPurple, style.textbold, {fontSize: 25}]}>
            Now Showing
          </Text>
        </View>
        <View style={[style.flexRow, style.flexBetween]}>
          <View style={[{flex: 1}, style.searchBox]}>
            <TextInput
              placeholder="Search Movie Name ..."
              placeholderTextColor={'grey'}
              keyboardType="default"
              autoCapitalize="none"
              style={{color: 'black'}}
            />
          </View>
          <View
            style={[{flex: 1}, style.searchBox, {flex: 1, marginLeft: '5%'}]}>
            <TextInput
              placeholder="Search Movie Name ..."
              placeholderTextColor={'grey'}
              keyboardType="default"
              autoCapitalize="none"
              style={{color: 'black'}}
              s
            />
          </View>
        </View>
        <View style={[style.flexBetween]}>
          <FlatList
            key={2}
            numColumns={2}
            horizontal={false}
            data={data.data.list}
            onEndReachedThreshold={0.3}
            renderItem={({item, index}) => {
              return (
                <>
                  <View style={[{width: '50%'}]}>
                    <View
                      style={[
                        style.flexRow,
                        style.flexCenter,
                        {display: 'flex'},
                      ]}>
                      <View
                        style={{
                          flexDirection: 'column',
                          paddingVertical: 10,
                        }}>
                        <View style={[style.flexCenter]}>
                          <Text
                            style={[
                              style.textBlack,
                              style.textbold,
                              {fontSize: 15},
                            ]}>
                            {item.title}
                          </Text>
                        </View>
                        <Pressable
                          onPress={() =>
                            navigation.navigate('MovieDetail', {
                              data: item,
                            })
                          }
                          android_ripple={{color: 'grey'}}>
                          <Image
                            source={{
                              uri: `https://walrus-app-req5v.ondigitalocean.app/uploads/${item.cover}`,
                            }}
                            style={{
                              width: 200,
                              height: 240,
                              resizeMode: 'contain',
                            }}
                          />
                        </Pressable>
                        <View style={[style.flexCenter]}>
                          <Text
                            style={[
                              style.textBlack,
                              style.textbold,
                              {fontSize: 15},
                            ]}>
                            {item.movie_category}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={[style.flexCenter]}
                          onPress={() =>
                            navigation.navigate('MovieDetail', {
                              data: item,
                            })
                          }>
                          <View
                            style={[
                              style.flexCenter,
                              style.flexBetween,
                              {
                                marginTop: 10,
                                backgroundColor: 'white',
                                marginHorizontal: '5%',
                                borderRadius: 5,
                                borderColor: '#5f2eea',
                                borderWidth: 1,
                                width: '65%',
                                flex: 1,
                              },
                            ]}>
                            <Text
                              style={[
                                style.textPurple,
                                {fontSize: 15, paddingVertical: 5},
                              ]}>
                              Buy Ticket
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </View>
        {/* <View style={[style.flexRow, {padding: 4}]}>
          {totalpage.map((item, index) => {
            return (
              <>
                {index + 1 == Pagination.page ? (
                  <>
                    <View
                      style={[
                        style.flexCenter,
                        {
                          backgroundColor: '#5f2eea',
                          borderColor: 'white',
                          borderWidth: 2,
                          width: 30,
                          height: 30,
                          borderRadius: 10,
                          marginRight: 15,
                        },
                      ]}>
                      <Text style={[style.textWhite]}>{index + 1}</Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View
                      style={[
                        style.flexCenter,
                        {
                          backgroundColor: 'white',
                          borderColor: 'black',
                          borderWidth: 2,
                          width: 30,
                          height: 30,
                          borderRadius: 10,
                          marginRight: 15,
                        },
                      ]}>
                      <Text style={[style.textBlack]}>{index + 1}</Text>
                    </View>
                  </>
                )}
              </>
            );
          })}
     
        </View> */}
      </View>
    </>
  );
};

{
  /* <FlatList
            key={data.data.totalpage}
            numColumns={data.data.totalpage}
            horizontal={false}
            data={totalpage}
            renderItem={({item, index}) => {
              console.log('ini item ke-', index + 1);
              return (
                <>
                  {index + 1 == Pagination.page ? (
                    <>
                      <View
                        style={[
                          style.flexCenter,
                          {
                            backgroundColor: '#5f2eea',
                            borderColor: 'white',
                            borderWidth: 2,
                            width: 30,
                            height: 30,
                            borderRadius: 10,
                            marginRight: 15,
                          },
                        ]}>
                        <Text style={[style.textWhite]}>{index + 1}</Text>
                      </View>
                    </>
                  ) : (
                    <>
                      <View
                        style={[
                          style.flexCenter,
                          {
                            backgroundColor: 'white',
                            borderColor: 'black',
                            borderWidth: 2,
                            width: 30,
                            height: 30,
                            borderRadius: 10,
                            marginRight: 15,
                          },
                        ]}>
                        <Text style={[style.textBlack]}>{index + 1}</Text>
                      </View>
                    </>
                  )}
                </>
              );
            }}
          /> */
}
