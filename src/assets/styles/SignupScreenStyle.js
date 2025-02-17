import {StyleSheet} from "react-native";
import colors from "../colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: "flex-end",
    },
    mainWrapper: {
        height: "68%",
        paddingTop: "5%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: colors.darkGrey,
        paddingBottom: "10%"
    },
    image: {
        justifyContent: 'center',
        width: 200,
        height: 170,
        marginVertical: 40,
        marginLeft: 90,
        borderRadius: 40,
    },
    signInStyle: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 25,
        letterSpacing: 0,
        color: colors.white,
        marginVertical: "3%"
    },
    inputView: {
        paddingVertical: '4%',
        paddingHorizontal: "3%",
        backgroundColor: colors.black,
        borderRadius: 20,
        width: "80%",
        marginVertical: "3%",
    },
    TextInput: {
        color: colors.white,
    },
    innerTextInput: {
        color: colors.white,
    },
    forgotLinksWrapper: {
        flexDirection: "row",
    },
    rememberMeButton: {
        paddingBottom: "3%",
        color: colors.black,
    },
    forgot_button: {
        paddingVertical: "4%",
        color: colors.primary,
        paddingHorizontal: "12%"
    },
    loginText: {
        color: colors.white
    },
    emailSendWrapper: {
        flexDirection: "column",
        alignItems: "center",
    },
    emailSendButton: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        opacity: 1,
        width: "75%",
        marginTop: "5%",
    },
    emailSendButtonText: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: 22,
        letterSpacing: 0,
        color: colors.black,
        opacity: 1,
        marginHorizontal: "8%",
        paddingVertical: '5%'
    },
    notAccountWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    signUpButton: {
        paddingVertical: "4%",
        color: colors.primary,
        paddingHorizontal: "1%",
        fontWeight: "500",
        fontSize: 16,
    },
    notAccountButton: {
        paddingVertical: "4%",
        color: colors.black,
        fontWeight: "500",
        fontSize: 15,
    },
    dropdown: {
        width: "75%",
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
        color: colors.white,
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.white
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.white
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
