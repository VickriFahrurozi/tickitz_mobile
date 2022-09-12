import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {style} from '../../../helper/style';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogout} from '../../redux/actions/auth';
const Header = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.auth);
  useEffect(() => {}, [data]);

  const handleLogout = () => {
    dispatch(AuthLogout());
  };
  return (
    <>
      <View style={[style.bgWhite]}>
        <View
          style={[
            style.flexRow,
            style.flexCenter,
            style.flexBetween,
            {paddingVertical: '2%', paddingHorizontal: '2%'},
          ]}>
          <View>
            {data.data.token ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    handleLogout();
                  }}>
                  <Image
                    source={require('../../../assets/Image/Logout.png')}
                    style={[
                      {
                        width: 50,
                        height: 40,
                        resizeMode: 'contain',
                      },
                    ]}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignIn');
                  }}>
                  <Image
                    source={require('../../../assets/Image/Login.png')}
                    style={[
                      {
                        width: 50,
                        height: 40,
                        resizeMode: 'contain',
                      },
                    ]}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>

          <Image
            source={require('../../../assets/Logo/TickitzLogo.png')}
            style={[
              {
                width: 100,
                height: 50,
                resizeMode: 'contain',
              },
            ]}
          />
          <Image
            source={require('../../../assets/Image/Notification.png')}
            style={[
              {
                width: 30,
                height: 30,
                resizeMode: 'contain',
              },
            ]}
          />
          {/* <View style={[style.bgRed, {padding: 2}]}>
          <TouchableOpacity>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View> */}
        </View>
        <View
          style={{
            borderBottomColor: 'grey',
            borderWidth: 0.8,
            borderColor: '#F5F5F5',
          }}></View>
      </View>
    </>
  );
};

export default Header;
