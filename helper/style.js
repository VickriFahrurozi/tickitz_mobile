import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  textBlack: {color: '#333'},
  textWhite: {color: '#fff'},
  textbold: {fontWeight: 'bold'},
  textPurple: {color: '#5F2EEA'},
  flexRow: {flexDirection: 'row'},
  flexColumn: {flexDirection: 'column'},
  flexCenter: {justifyContent: 'center', alignItems: 'center'},
  alignSelfCenter: {alignSelf: 'center'},
  flexBetween: {justifyContent: 'space-between'},
  flexAround: {justifyContent: 'space-around'},
  bgGreen: {backgroundColor: 'green'},
  bgRed: {backgroundColor: 'red'},
  bgWhite: {backgroundColor: 'white'},
  bgYellow: {backgroundColor: 'yellow'},
  absolute: {position: 'absolute'},
  MainButton: {
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    paddingVertical: '5%',
  },
  inputBox: {
    backgroundColor: '#FCFDFE',
    borderRadius: 10,
    marginTop: '1%',
    paddingVertical: '0.5%',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#dedede',
    marginBottom: '3%',
  },
  searchBox: {
    backgroundColor: '#FCFDFE',
    borderRadius: 10,
    marginTop: '1%',
    paddingVertical: '0.5%',
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#dedede',
    marginBottom: '3%',
  },
});

const header = StyleSheet.create({});

const mainAuth = StyleSheet.create({
  body: {marginHorizontal: '5%', paddingVertical: '7%'},
});

const Auth = StyleSheet.create({
  header: {marginTop: '3%', marginBottom: '5%'},
});

export {style, header, mainAuth, Auth};
