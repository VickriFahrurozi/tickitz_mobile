import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {GetOrder} from '../../redux/actions/order';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {FlatList} from 'react-native';
import {style} from '../../../helper/style';
import Header from '../components/Header';
import {Image} from 'react-native';

const MyTicket = ({navigation}) => {
  const dispatch = useDispatch();
  const dataaccount = useSelector(state => state.auth);
  const dataTicket = useSelector(state => state.getorder);

  useEffect(() => {
    dispatch(GetOrder(dataaccount.data.ID));
    if (!dataaccount?.data?.token?.length) {
      navigation.navigate('SignIn');
    }
  }, []);

  return (
    <>
      <View style={[style.bgWhite]}>
        <Header />
      </View>
      <View style={[style.flexCenter, {paddingVertical: '5%'}, style.bgWhite]}>
        <Text style={[style.textPurple, style.textbold, {fontSize: 25}]}>
          HISTORY
        </Text>
      </View>
      <ScrollView style={[style.bgWhite]}>
        <FlatList
          key={1}
          numColumns={1}
          horizontal={false}
          data={dataTicket.data.data}
          renderItem={({item, index}) => {
            return (
              <>
                <View
                  style={[
                    {
                      width: '100%',

                      borderRadius: 20,
                      marginBottom: '5%',
                      borderColor: '#5F2EEA',
                      borderWidth: 1,
                    },
                  ]}>
                  <View style={[style.flexCenter]}>
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
                          {item.movie_title}
                        </Text>
                      </View>
                      <View style={[style.flexCenter]}>
                        <Text
                          style={[
                            style.textBlack,
                            style.textbold,
                            {fontSize: 15},
                          ]}>
                          {item.cinema_name}
                        </Text>
                      </View>
                      <View style={[style.flexCenter]}>
                        <Text
                          style={[
                            style.textBlack,
                            style.textbold,
                            {fontSize: 15},
                          ]}>
                          {item.order_date.slice(0, 10)}-{item.order_time}
                        </Text>
                      </View>
                      <View style={[style.flexCenter]}>
                        <Text
                          style={[
                            style.textBlack,
                            style.textbold,
                            {fontSize: 15},
                          ]}>
                          Seat Buy = {item.order_total_seat}
                        </Text>
                      </View>
                      <View style={[style.flexCenter]}>
                        <Text
                          style={[
                            style.textBlack,
                            style.textbold,
                            {fontSize: 15},
                          ]}>
                          Seat Place = {item.order_seat}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

export default MyTicket;
