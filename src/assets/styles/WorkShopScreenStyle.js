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
    marginBottom: "8%",
    textTransform: "uppercase",
  },
  workShopCards: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
  cardImages: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  cardLeftWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardLowerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.white,
    fontWeight: 300,
    opacity: 1,
    marginBottom: "12%",
    marginLeft: "12%"
  }
})
