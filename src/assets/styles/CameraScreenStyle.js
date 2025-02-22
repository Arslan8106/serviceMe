import { StyleSheet, Dimensions } from "react-native";
import colors from "../colors/colors";
export default StyleSheet.create({

  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  cameraHeadingText: {
    textAlign: "center",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 24,
    color: colors.white,
    fontWeight: 900,
    opacity: 1,
    marginTop: "2%",
    marginBottom: "6%",
    textTransform: "capitalize",

  },
  cameraButtons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: "45%",
    marginRight: "10%",
    marginTop: "4%"
  } ,
  cameraImage: {
    width: 340,
    height: 220,
    alignSelf: "center",
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
  },
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
  skeletonWrapper: {
    marginHorizontal: "6%",
    backgroundColor: colors.midLightBlack,
  },
  removeImage: {
    marginHorizontal: "6%",
    marginVertical: "3%",
    paddingVertical: "2%",
    textAlign: "center",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 20,
    color: colors.darkRed,
    fontWeight: 800,
    opacity: 1,
    marginBottom: "2%",
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  sendImage: {
    marginHorizontal: "6%",
    marginVertical: "3%",
    paddingVertical: "2%",
    textAlign: "center",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 20,
    color: colors.white,
    fontWeight: 900,
    opacity: 1,
    marginBottom: "2%",
    backgroundColor: colors.primary,
    borderRadius: 10,

  },
  viewWorkShops: {
    marginHorizontal: "6%",
    marginVertical: "3%",
    paddingVertical: "2%",
    textAlign: "center",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 20,
    color: colors.white,
    fontWeight: 900,
    opacity: 1,
    marginBottom: "2%",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  cameraPreview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width, // Making it square by using width for both height and width
    position: 'absolute',
    top: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  captureText: {
    fontSize: 16,
    fontWeight: 'bold',
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
    color: colors.white,
    fontWeight: 500,
    opacity: 1,
    marginBottom: "6%",
    backgroundColor: colors.black,
  },

})
