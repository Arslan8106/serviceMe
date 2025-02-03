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
    fontSize: 30,
    color: colors.white,
    fontWeight: 500,
    opacity: 1,
    marginTop: "2%",
    marginBottom: "12%",
    textTransform: "uppercase",

  },
  cameraButtons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: "45%",
    marginRight: "10%"
  } ,
  cameraImage: {
    width: 350,
    height: 300,
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
  removeImage: {
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

})
