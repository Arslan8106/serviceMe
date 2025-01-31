import { StyleSheet, Dimensions } from "react-native";
import colors from "../colors/colors";
export default StyleSheet.create({
    homeContainer: {
        paddingVertical: "60%",
        paddingHorizontal: "10%",
        alignItems: "center",
    },
    appLogoStyle: {
        width: "100%",
        height: 250,
        marginBottom: "10%"
    },
    appLogoText: {
            textAlign: "center",
            fontFamily: "Poppins-Bold",
            fontSize: 20,
            fontWeight: "900",
            color: colors.primary,
    },
});
