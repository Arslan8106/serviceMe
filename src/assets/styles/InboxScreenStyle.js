import { StyleSheet, Dimensions } from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({

  headingText: {
    marginHorizontal: "6%",
    marginVertical: "4%",
    paddingVertical: "2%",
    textAlign: "center",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 20,
    color: colors.white,
    fontWeight: 500,
    opacity: 1,
    marginBottom: "6%",
    backgroundColor: colors.black,
  },
  innerTextWrapper: {
    paddingHorizontal: "4%",

    alignItems: "flex-start",
  },
  sendWhatsappMessageWrapper: {
    borderRadius: 10,
    backgroundColor: colors.black,
    paddingHorizontal: '40%',
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "3%"
  },
  input: {
    height: 105,
    width: '90%',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '5%',
    paddingHorizontal: 10,
    color: colors.lightGrey,
    fontSize: 18,
    backgroundColor: colors.black,
  },
  sendMessageText: {
    color: colors.primary,
    fontSize: 20,
    alignItems: "center",
  },
  appLogoStyle: {
    width: "100%",
    height: 40,
  },
  screenTwoWrapper: {
    flex: 1,
    // backgroundColor: colors.white,
    paddingVertical: "1%",
  },
  mainInnerWrapper: {
    alignItems: "center",
    opacity: 1,
    marginBottom: "10%"
  },
  phoneNumberPlaceholderStyle: {
    textAlign: "left",
    fontFamily: "Poppins-Light",
    fontSize: 17,
    color: colors.white,
    backgroundColor: colors.black,
  },
  responseWrapper: {
    backgroundColor: colors.black,
    marginHorizontal: "5%",
    marginVertical: "5%",
    height: 200,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
  },
  responseText: {
    marginVertical: "4%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    textAlign: "left",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 20,
    color: colors.lightGrey,
    fontWeight: 500,
    opacity: 1,
    marginBottom: "6%",
    backgroundColor: colors.black,
  },
});
