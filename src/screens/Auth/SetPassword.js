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
import {useState} from 'react';

const SetPassword = () => {
  const [showpassword, setshowpassword] = useState(false);
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
          <View style={[Auth.header, {marginBottom: '10%'}]}>
            <Text style={[style.textBlack, style.textbold, {fontSize: 35}]}>
              Set Password
            </Text>
            <Text>set your new password </Text>
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
                style={[{flex: 1}]}
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
                style={[{flex: 1}]}
              />
              <Pressable
                onPress={() => setshowpassword(!showpassword)}
                style={[style.alignSelfCenter]}>
                <Text>{showpassword ? 'Hide' : 'Show'}</Text>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity
            style={[
              style.flexCenter,
              style.MainButton,
              {marginTop: '3%', marginBottom: '3%'},
            ]}>
            <Text style={[style.textWhite, style.textbold]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default SetPassword;
