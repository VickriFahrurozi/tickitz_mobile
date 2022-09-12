import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {style, mainAuth, Auth} from '../../../helper/style';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterAuth} from '../../redux/actions/auth';
const SignUp = ({navigation}) => {
  const [showpassword, setshowpassword] = useState(false);
  const dispatch = useDispatch();
  const [RegisterData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    first_name: '',
    last_name: '',
    phone_number: '',
  });

  const handleregister = () => {
    dispatch(RegisterAuth(RegisterData));
  };
  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={[mainAuth.body]}>
          <View style={[style.flexRow]}>
            <Image
              source={require('../../../assets/Logo/TickitzLogo.png')}
              style={{
                width: 100,
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={[Auth.header]}>
            <Text style={[style.textBlack, style.textbold, {fontSize: 35}]}>
              Sign Up
            </Text>
            <Text>Fill Your Additional Details</Text>
          </View>
          <View>
            <View>
              <Text style={[style.textBlack]}>First Name</Text>
            </View>
            <View style={[style.inputBox]}>
              <TextInput
                placeholder="Write Your First Name"
                placeholderTextColor={'grey'}
                autoCapitalize="words"
                style={[{flex: 1, color: 'black'}]}
                onChangeText={first_name => {
                  setRegisterData(prevData => ({
                    ...prevData,
                    first_name: first_name,
                  }));
                }}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={[style.textBlack]}>Last Name</Text>
            </View>
            <View style={[style.inputBox]}>
              <TextInput
                placeholder="Write Your Last Name"
                placeholderTextColor={'grey'}
                autoCapitalize="words"
                style={[{flex: 1, color: 'black'}]}
                onChangeText={last_name => {
                  setRegisterData(prevData => ({
                    ...prevData,
                    last_name: last_name,
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
                keyboardType="numeric"
                style={[{flex: 1, color: 'black'}]}
                onChangeText={phone_number => {
                  setRegisterData(prevData => ({
                    ...prevData,
                    phone_number: phone_number,
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
                  setRegisterData(prevData => ({
                    ...prevData,
                    email: email,
                  }));
                }}
              />
            </View>
          </View>
          <View>
            <View>
              <Text style={[style.textBlack]}>Password</Text>
            </View>
            <View style={[style.flexBetween, style.flexRow, style.inputBox]}>
              <TextInput
                placeholder="Write Your Password"
                placeholderTextColor={'grey'}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={!showpassword}
                style={[{flex: 1, color: 'black'}]}
                onChangeText={password => {
                  setRegisterData(prevData => ({
                    ...prevData,
                    password: password,
                  }));
                }}
              />
              <Pressable
                onPress={() => setshowpassword(!showpassword)}
                style={[style.alignSelfCenter]}>
                <Text>{showpassword ? 'Hide' : 'Show'}</Text>
              </Pressable>
            </View>
          </View>
          <View>
            <View>
              <Text style={[style.textBlack]}>Confirm Password</Text>
            </View>
            <View style={[style.flexBetween, style.flexRow, style.inputBox]}>
              <TextInput
                placeholder="Re-Write Your Password"
                placeholderTextColor={'grey'}
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry={!showpassword}
                style={[{flex: 1, color: 'black'}]}
                onChangeText={confirmpassword => {
                  setRegisterData(prevData => ({
                    ...prevData,
                    confirmpassword: confirmpassword,
                  }));
                }}
              />
              <Pressable
                onPress={() => setshowpassword(!showpassword)}
                style={[style.alignSelfCenter]}>
                <Text>{showpassword ? 'Hide' : 'Show'}</Text>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleregister()}
            style={[
              style.flexCenter,
              style.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[style.textWhite, style.textbold]}>Sign Up</Text>
          </TouchableOpacity>

          <View style={style.flexCenter}>
            <Pressable
              onPress={() => navigation.navigate('SignIn')}
              android_ripple={{color: 'purple'}}>
              <Text style={[style.textBlack]}>
                Already Have An Account ?{' '}
                <Text
                  style={[
                    style.textPurple,
                    style.textbold,
                    {textDecorationLine: 'underline'},
                  ]}>
                  Sign In
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;
