import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovies,
  getNowShowingMovies,
  getUpcomingMovies,
} from '../../../redux/actions/movies';
import {useState, useEffect} from 'react';
import {style} from '../../../../helper/style';
import {Pressable} from 'react-native';

export const NowShowingList = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies);
  useEffect(() => {
    dispatch(getNowShowingMovies(100, 1));
  }, []);
  return (
    <>
      <View>
        <FlatList
          horizontal={true}
          data={data.data.list}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: '#333'}} />
          )}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={[style.flexCenter]}>
                  <View
                    style={{
                      flexDirection: 'column',
                      paddingVertical: 10,
                    }}>
                    <Pressable
                      onPress={() =>
                        navigation.push('MovieDetail', {
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
                          height: 280,
                          resizeMode: 'contain',
                        }}
                      />
                    </Pressable>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('MovieDetail', {
                          data: item,
                        })
                      }>
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
                            {fontSize: 15, paddingVertical: 5},
                          ]}>
                          Buy Ticket
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </>
  );
};
export const UpcomingList = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.upcomingmovies);
  useEffect(() => {
    dispatch(getUpcomingMovies(100, 1));
  }, []);
  return (
    <>
      <View>
        <FlatList
          horizontal={true}
          data={data.data.list}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: '#333'}} />
          )}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={[style.flexCenter]}>
                  <View
                    style={[
                      style.flexCenter,
                      {
                        flexDirection: 'column',
                        paddingVertical: 10,
                      },
                    ]}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('UpcomingDetail', {
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
                          height: 280,
                          resizeMode: 'contain',
                        }}
                      />
                    </Pressable>
                    <View style={[style.flexCenter, {paddingVertical: '5%'}]}>
                      <Text
                        style={[
                          style.textBlack,
                          style.textbold,
                          {fontSize: 20},
                        ]}>
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          style.textbold,
                          {fontSize: 18},
                          ,
                          {color: 'grey'},
                        ]}>
                        {item.movie_category}
                      </Text>
                      <Text
                        style={[
                          style.textbold,
                          {fontSize: 14},
                          ,
                          {color: '#5f2eea'},
                        ]}>
                        {item.showing_date_start.slice(8, 10)}
                        &nbsp;
                        {item.showing_date_start.slice(5, 7) == '01' ? (
                          <>January</>
                        ) : (
                          <>
                            {item.showing_date_start.slice(5, 7) == '02' ? (
                              <>February</>
                            ) : (
                              <>
                                {item.showing_date_start.slice(5, 7) == '03' ? (
                                  <>March</>
                                ) : (
                                  <>
                                    {item.showing_date_start.slice(5, 7) ==
                                    '04' ? (
                                      <>April</>
                                    ) : (
                                      <>
                                        {item.showing_date_start.slice(5, 7) ==
                                        '05' ? (
                                          <>May</>
                                        ) : (
                                          <>
                                            {item.showing_date_start.slice(
                                              5,
                                              7,
                                            ) == '06' ? (
                                              <>June</>
                                            ) : (
                                              <>
                                                {item.showing_date_start.slice(
                                                  5,
                                                  7,
                                                ) == '07' ? (
                                                  <>July</>
                                                ) : (
                                                  <>
                                                    {item.showing_date_start.slice(
                                                      5,
                                                      7,
                                                    ) == '08' ? (
                                                      <>August</>
                                                    ) : (
                                                      <>
                                                        {item.showing_date_start.slice(
                                                          5,
                                                          7,
                                                        ) == '09' ? (
                                                          <>September</>
                                                        ) : (
                                                          <>
                                                            {item.showing_date_start.slice(
                                                              5,
                                                              7,
                                                            ) == '10' ? (
                                                              <>October </>
                                                            ) : (
                                                              <>
                                                                {item.showing_date_start.slice(
                                                                  5,
                                                                  7,
                                                                ) == '11' ? (
                                                                  <>November</>
                                                                ) : (
                                                                  <>December</>
                                                                )}
                                                              </>
                                                            )}
                                                          </>
                                                        )}
                                                      </>
                                                    )}
                                                  </>
                                                )}
                                              </>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                        &nbsp;
                        {item.showing_date_start.slice(0, 4)}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    </>
  );
};
