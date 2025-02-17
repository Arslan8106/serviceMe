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
    fontSize: 28,
    color: colors.white,
    fontWeight: 500,
    opacity: 1,
    marginTop: "2%",
    marginBottom: "8%",
    textTransform: "capitalize",
  },
  workShopCards: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: "5%",
    marginVertical: "5%",
    width: "100%",
    gap: 5,
  },
  cardImages: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  cardLeftWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cameraScreenButton: {
    marginHorizontal: "6%",
    marginVertical: "3%",
    paddingVertical: "2%",
    textAlign: "center",
    fontFamily: "Poppins-ExtraBold",
    fontSize: 20,
    color: colors.white,
    fontWeight: 500,
    opacity: 1,
    marginBottom: "2%",
    backgroundColor: colors.black,
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
    width: 220,
    opacity: 1,
    marginBottom: "12%",
    // paddingHorizontal: 15
  },
  navigateText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.white,
    fontWeight: 300,
    opacity: 1,
    marginBottom: "3%",
  },
  cardRatingText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.white,
    fontWeight: 300,
    opacity: 1,
    marginBottom: "12%",
    marginLeft: "10%"
  }
})
