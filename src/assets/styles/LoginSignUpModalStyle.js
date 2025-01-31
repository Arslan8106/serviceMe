import { StyleSheet, Dimensions } from "react-native";
import colors from "../colors/colors";
export default StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: "11%",
    backgroundColor: "transparent",
  },
  modalContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonsText: {
    fontSize: 18,
    color: 'blue',
  },
  pickerModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  closeButton: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: 'red',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  transparentBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
  },
  modalContent: {
    backgroundColor: "white",
    marginTop: "auto",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "100%",
  },
  modalInnerContentWrapper: {
    paddingHorizontal: "3%",
  },
  appLogoStyle: {
    width: "50%",
    height: 150,
  },
  logoWrapper: {
    borderColor: colors.white,
    opacity: 1,
    alignItems: "center",
    // marginHorizontal: "25%",
    marginTop: "20%",
    marginBottom: "85%"
  },
  logoTextHeading:{
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 34,
    fontWeight: "900",
    color: colors.white,

    marginVertical: "2%"
  },
  driveTextHeading:{
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 28,
    color: colors.white,
    paddingTop: "1.5%",
    marginVertical: "2%"
  },

  signUpButton: {
    paddingVertical: "2%",
    color: colors.white,
    paddingHorizontal: "1%",
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    backgroundColor: colors.darkBlue,
    borderRadius: 8,
    textAlign: "center",
    marginVertical: "2%"
  },
  loginButton: {
    paddingVertical: "2%",
    color: colors.black,
    paddingHorizontal: "1%",
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    backgroundColor: colors.white,
    borderRadius: 8,
    textAlign: "center",
    marginVertical: "2%"

  },
  cancelButton: {
    position: 'absolute',
    top: 10,
    paddingLeft: "2%",
    zIndex: 999, // Ensures the button is above other content
  },
});
