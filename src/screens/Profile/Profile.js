import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {style} from '../../../helper/style';
import Header from '../components/Header';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../redux/actions/profile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import {updateProfile} from '../../redux/actions/profile';
const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.auth);
  const dataprofile = useSelector(state => state.getprofile.data.result[0]);
  const [profile, setprofile] = useState({
    first_name: dataprofile.first_name,
    last_name: dataprofile.last_name,
    phone_number: dataprofile.phone_number,
    profile_picture: '',
  });
  const [change, setchange] = useState(false);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        OpenCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const OpenCamera = () => {
    setModalVisible(!modalVisible);
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('Canceled Taking Pictures');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        setchange(true);
        setprofile(prevData => ({
          ...prevData,
          profile_picture: res.assets[0],
        }));
      }
    });
  };
  const OpenGallery = () => {
    setModalVisible(!modalVisible);
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('Canceled Taking Pictures');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        setchange(true);
        setprofile(prevData => ({
          ...prevData,
          profile_picture: res.assets[0],
        }));
      }
    });
  };

  const formdata = new FormData();
  formdata.append('first_name', profile.first_name);
  formdata.append('last_name', profile.last_name);
  formdata.append('phone_number', profile.phone_number);
  formdata.append('profile_picture', {
    uri: profile.profile_picture.uri,
    type: profile.profile_picture.type,
    name: profile.profile_picture.fileName,
  });

  const handleUpdate = async e => {
    dispatch(updateProfile(data.data.ID, data.data.token, formdata));
  };
  useEffect(() => {
    if (!data?.data?.token) {
      alert('Please Login First');
      navigation.navigate('SignIn');
    } else {
      dispatch(getProfile(data.data.ID, data.data.token));
    }
  }, [data]);
  return (
    <>
      <Header />
      <ScrollView style={[style.bgWhite]}>
        <View style={[style.flexCenter, {paddingVertical: '10%'}]}>
          {dataprofile?.profile_picture.length && change == false ? (
            <>
              <Image
                source={{
                  uri: `https://walrus-app-req5v.ondigitalocean.app/uploads/${dataprofile.profile_picture}`,
                  // uri: profile.profile_picture[0].uri,
                }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 70,
                  resizeMode: 'contain',
                }}
              />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={[style.textPurple]}>Edit</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {profile?.profile_picture?.uri?.length ? (
                <>
                  <Image
                    source={{
                      // uri: `https://walrus-app-req5v.ondigitalocean.app/uploads/${profile.profile_picture}`,
                      uri: profile.profile_picture.uri,
                    }}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 70,
                      resizeMode: 'contain',
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[style.textPurple]}>Edit</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Image
                    source={require('../../../assets/Logo/user.png')}
                    style={{
                      width: 100,
                      height: 100,

                      resizeMode: 'contain',
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[style.textPurple]}>Edit</Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          )}
          <View style={{marginTop: '3%'}}>
            <Text style={[style.textBlack, style.textbold, {fontSize: 20}]}>
              {profile.first_name} {profile.last_name}
            </Text>
          </View>
        </View>
        <View style={[style.flexRow, style.flexAround]}>
          <View style={{flex: 0.8, marginHorizontal: '3%'}}>
            <Text style={{color: 'black'}}>First Name</Text>
            <View style={[style.inputBox]}>
              <TextInput
                defaultValue={dataprofile.first_name}
                autoCapitalize="words"
                style={[{color: 'black'}]}
                onChangeText={first_name => {
                  setprofile(prevData => ({
                    ...prevData,
                    first_name: first_name,
                  }));
                }}
              />
            </View>
          </View>
          <View style={{flex: 0.8, marginHorizontal: '3%'}}>
            <Text style={{color: 'black'}}>Last Name</Text>
            <View style={[style.inputBox]}>
              <TextInput
                defaultValue={dataprofile.last_name}
                autoCapitalize="words"
                style={[{color: 'black'}]}
                onChangeText={last_name => {
                  setprofile(prevData => ({
                    ...prevData,
                    last_name: last_name,
                  }));
                }}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 0.8, marginHorizontal: '3%', marginVertical: '3%'}}>
          <Text style={{color: 'black'}}>Phone Number</Text>
          <View style={[style.inputBox]}>
            <TextInput
              defaultValue={dataprofile.phone_number}
              autoCapitalize="words"
              style={[{color: 'black'}]}
              onChangeText={phone_number => {
                setprofile(prevData => ({
                  ...prevData,
                  phone_number: phone_number,
                }));
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log(formdata, 'ini yang bakal dikirim loh');
            handleUpdate();
          }}
          style={[
            style.flexCenter,
            style.MainButton,
            {
              marginTop: '3%',
              marginBottom: '3%',
              paddingVertical: '3%',
              marginHorizontal: '5%',
            },
          ]}>
          <Text style={[style.textWhite, style.textbold]}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[
            style.flexCenter,
            style.alignSelfCenter,
            {
              marginTop: '50%',
              borderWidth: 0.5,
              borderRadius: 10,
              backgroundColor: 'white',
              paddingBottom: '5%',
            },
          ]}>
          <View style={[style.flexCenter]}>
            <View style={{borderBottomColor: 'purple', borderBottomWidth: 1}}>
              <Text
                style={[
                  style.textPurple,
                  style.textbold,
                  {fontSize: 20, paddingHorizontal: '10%'},
                ]}>
                Choose The Option
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => requestCameraPermission()}
                style={{
                  marginTop: '3%',
                  paddingBottom: '3%',
                  borderBottomWidth: 1,
                }}>
                <Text
                  style={[
                    style.textbold,
                    {
                      fontSize: 15,
                      color: 'black',
                      paddingHorizontal: '15%',
                    },
                  ]}>
                  Taking From Camera
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[style.flexCenter]}
                onPress={() => OpenGallery()}>
                <Text
                  style={[
                    style.textbold,
                    {
                      fontSize: 15,
                      color: 'black',
                      paddingTop: '2%',
                    },
                  ]}>
                  Choose From Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Profile;
