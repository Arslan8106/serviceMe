import {StyleSheet, Dimensions} from 'react-native';
import colors from '../colors/colors';

export default StyleSheet.create({
  homeContainer: {
    paddingVertical: '50%',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  appLogoStyle: {
    width: '100%',
    height: 230,
    marginBottom: '10%',
    borderRadius: 40,
  },
  appLogoText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '900',
    color: colors.primary,
  },
  logoutWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logoutText: {
    paddingHorizontal: 5,
    textAlign: 'right',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '900',
    color: colors.darkRed,
  },
});
