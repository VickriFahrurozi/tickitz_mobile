import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import {style} from '../../../helper/style';
import Header from '../components/Header';
import {useState} from 'react';
import {AddOrder} from '../../redux/actions/order';
import {Dispatch} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const CheckOut = ({navigation, route}) => {
  const dispatch = useDispatch();
  const dataaccount = useSelector(state => state.auth);
  const data = route.params.data;
  const detail = route.params.detail;
  const choose = route.params.choose;

  const [method, setmethod] = useState('');
  const [info, setinfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [dataOrder, setdataOrder] = useState({
    account_id: dataaccount.data.ID,
    movie_title: data.title,
    cinema_brand: detail.item.cinema_brand,
    cinema_name: detail.item.cinema_name,
    order_date: detail.date,
    order_time: detail.time,
    order_total_seat: choose.length,
    order_price: choose.length * 50000,
    order_seat: choose,
  });
  console.log(dataOrder, 'ini data ordernya');
  const handleOrder = () => {
    if (!info.email || !info.name || !info.phone || !method) {
      alert('Please Fill The Data First');
    } else {
      dispatch(AddOrder(dataOrder));
      alert('Success Buy Ticket');
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('Tiket Berhasil Di Beli', JSON.stringify(remoteMessage));
      });
      navigation.navigate('MyTicket');
      return unsubscribe;
    }
  };

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <Header />
      </View>
      <ScrollView>
        <View style={[style.flexCenter, {paddingVertical: '5%'}]}>
          <Text
            style={[
              style.textBlack,
              style.textbold,
              {color: 'black', fontSize: 20},
            ]}>
            Total Payment = {choose.length * 50000}
          </Text>
        </View>
        <View style={[{marginHorizontal: '5%', paddingVertical: '5%'}]}>
          <Text
            style={[
              style.textBlack,
              style.textbold,
              {color: 'black', fontSize: 18},
            ]}>
            Payment Method
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: '5%',
            borderRadius: 15,
            paddingHorizontal: '5%',
            paddingVertical: '10%',
          }}>
          <View style={[style.flexRow, style.flexCenter, style.flexAround]}>
            <TouchableOpacity onPress={() => setmethod('googleplay')}>
              <View
                style={[
                  style.flexCenter,
                  {
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    backgroundColor: method == 'googleplay' ? 'grey' : 'white',
                    padding: '3%',
                    paddingHorizontal: '5%',
                    borderRadius: 10,
                  },
                ]}>
                <Image
                  source={require('../../../assets/Logo/GooglePlay.png')}
                  style={{width: 50, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setmethod('visa')}>
              <View
                style={[
                  style.flexCenter,
                  {
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    padding: '3%',
                    backgroundColor: method == 'visa' ? 'grey' : 'white',
                    paddingHorizontal: '5%',
                    borderRadius: 10,
                  },
                ]}>
                <Image
                  source={require('../../../assets/Logo/Visa.png')}
                  style={{width: 50, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setmethod('gopay')}>
              <View
                style={[
                  style.flexCenter,
                  {
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    padding: '3%',
                    backgroundColor: method == 'gopay' ? 'grey' : 'white',
                    paddingHorizontal: '5%',
                    borderRadius: 10,
                  },
                ]}>
                <Image
                  source={require('../../../assets/Logo/Gopay.png')}
                  style={{width: 50, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              style.flexRow,
              style.flexCenter,
              style.flexAround,
              {marginVertical: '5%'},
            ]}>
            <TouchableOpacity onPress={() => setmethod('paypal')}>
              <View
                style={[
                  style.flexCenter,
                  {
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    padding: '3%',
                    paddingHorizontal: '5%',
                    backgroundColor: method == 'paypal' ? 'grey' : 'white',
                    borderRadius: 10,
                  },
                ]}>
                <Image
                  source={require('../../../assets/Logo/Paypal.png')}
                  style={{width: 50, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setmethod('ovo')}>
              <View
                style={[
                  style.flexCenter,
                  {
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    padding: '3%',
                    paddingHorizontal: '5%',
                    backgroundColor: method == 'ovo' ? 'grey' : 'white',
                    borderRadius: 10,
                  },
                ]}>
                <Image
                  source={require('../../../assets/Logo/Ovo.png')}
                  style={{width: 50, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setmethod('dana')}>
              <View
                style={[
                  style.flexCenter,
                  {
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    padding: '3%',
                    backgroundColor: method == 'dana' ? 'grey' : 'white',
                    paddingHorizontal: '5%',
                    borderRadius: 10,
                  },
                ]}>
                <Image
                  source={require('../../../assets/Logo/Dana.png')}
                  style={{width: 50, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[style.flexRow, style.flexCenter]}>
            <View>
              <Text style={{fontSize: 15}}>Or</Text>
            </View>
          </View>
          <View style={[style.flexCenter]}>
            <Text style={{fontSize: 15}}>
              Pay Via Cash ,{' '}
              <Text style={[style.textPurple]}>See How It Works</Text>
            </Text>
          </View>
        </View>
        <View style={[{marginHorizontal: '5%', paddingVertical: '5%'}]}>
          <Text
            style={[
              style.textBlack,
              style.textbold,
              {color: 'black', fontSize: 18},
            ]}>
            Personal Info
          </Text>
        </View>
        <View
          style={[
            style.bgWhite,
            {
              paddingHorizontal: '7%',
              paddingVertical: '5%',
              marginHorizontal: '5%',

              borderRadius: 15,
            },
          ]}>
          <View>
            <View>
              <Text style={[style.textBlack]}>Full Name</Text>
            </View>
            <View style={[style.inputBox]}>
              <TextInput
                placeholder="Write Your Full Name"
                placeholderTextColor={'grey'}
                keyboardType="text"
                style={[{flex: 1, color: 'black'}]}
                onChangeText={name => {
                  setinfo(prevData => ({
                    ...prevData,
                    name: name,
                  }));
                }}
              />
            </View>
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
                style={[{flex: 1, color: 'black'}]}
                onChangeText={email => {
                  setinfo(prevData => ({
                    ...prevData,
                    email: email,
                  }));
                }}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={[style.textBlack]}>Phone Number</Text>
            </View>
            <View style={[style.inputBox]}>
              <TextInput
                placeholder="Write Your Phone Number"
                placeholderTextColor={'grey'}
                keyboardType="number-pad"
                style={[{flex: 1, color: 'black'}]}
                onChangeText={phone => {
                  setinfo(prevData => ({
                    ...prevData,
                    phone: phone,
                  }));
                }}
              />
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: '10%', marginVertical: '10%'}}>
          <TouchableOpacity
            onPress={() => handleOrder()}
            style={[
              {backgroundColor: '#5F2EEA', borderRadius: 15},
              style.flexCenter,
            ]}>
            <Text
              style={[
                style.textWhite,
                style.textbold,
                {fontSize: 20, paddingVertical: '4%'},
              ]}>
              Pay Your Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default CheckOut;
