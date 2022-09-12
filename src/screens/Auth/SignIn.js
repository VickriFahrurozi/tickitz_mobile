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
import {LoginAuth} from '../../redux/actions/auth';
const SignIn = ({navigation}) => {
  const data = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [Refetch, setRefetch] = useState(false);
  const [LoginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const handlelogin = () => {
    dispatch(LoginAuth(LoginData));
    setRefetch(!Refetch);
  };
  const [showpassword, setshowpassword] = useState(false);
  useEffect(() => {
    if (data?.data?.token?.length) {
      navigation.navigate('Home');
    }
  }, [data]);
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
            <Text style={[style.textbold, style.textBlack, {fontSize: 35}]}>
              Sign In
            </Text>
            <Text>
              Sign in with your data that you entered during your registration
            </Text>
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
                  setLoginData(prevData => ({
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
                  setLoginData(prevData => ({
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
          <TouchableOpacity
            onPress={() => handlelogin()}
            style={[
              style.flexCenter,
              style.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[style.textWhite, style.textbold]}>Sign In</Text>
          </TouchableOpacity>
          <View style={[style.flexCenter, {marginTop: '5%'}]}>
            <Pressable
              onPress={() => navigation.navigate('ForgotPassword')}
              android_ripple={{color: 'purple'}}>
              <Text style={[{marginBottom: '2%', color: 'black'}]}>
                Forgot Your Password ?{' '}
                <Text
                  style={[
                    style.textPurple,
                    style.textbold,
                    {textDecorationLine: 'underline'},
                  ]}>
                  Reset Now
                </Text>
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('SignUp')}
              android_ripple={{color: 'purple'}}>
              <Text style={[{flex: 1, color: 'black'}]}>
                Dont't Have An Account ?{' '}
                <Text
                  style={[
                    style.textPurple,
                    style.textbold,
                    {textDecorationLine: 'underline'},
                  ]}>
                  Sign Up
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
