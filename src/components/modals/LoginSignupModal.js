import React, { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View, ImageBackground,
} from "react-native";
import styles from "../../assets/styles/LoginSignUpModalStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
// import LoginModal from "./LoginModal";
// import SignupModal from "./SignupModal";
// import { useDispatch } from "react-redux";
import { modalSuccess } from "../../redux/action";

const LoginSignUpModal = (props) => {
  const navigation = useNavigation();
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  // const dispatch = useDispatch();

  // const handleModal = () => {
  //   dispatch(modalSuccess(true));
  // };
  const closeModal = () => {
    navigation.navigate("Home");
    props.setIsLoggedIn(true);
    // handleModal();
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent
        animationType="slide"
        visible={true}
        onRequestClose={() => {
          closeModal();
        }}>
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={styles.modalContainer}>
            <View style={styles.transparentBackground}>
              <TouchableWithoutFeedback onPress={() => {
              }}>
                <View style={styles.modalContent}>
                  <ImageBackground style={styles.backgroundImage}
                                   source={require("../../assets/images/login/LoginImage.jpg")}
                  >
                    <TouchableOpacity onPress={closeModal} style={styles.cancelButton}>
                      <MaterialCommunityIcons name="close" size={28} color="white" />
                    </TouchableOpacity>
                    <View style={styles.modalInnerContentWrapper}>
                      <View style={styles.logoWrapper}>
                        <Image style={styles.appLogoStyle} source={require('../../assets/images/service.png')} />
                        <Text style={styles.driveTextHeading}>Find your repairing shop</Text>

                      </View>
                      <TouchableOpacity onPress={() => setSignUpModal(true)}>
                        <Text style={styles.signUpButton}>Sign up</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setLoginModal(true)}>
                        <Text style={styles.loginButton}>Log in</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/*{signUpModal && <SignupModal setSignupModal={setSignUpModal} />}*/}
      {/*{loginModal && <LoginModal setLoginModal={setLoginModal} />}*/}
    </View>
  );
};

export default LoginSignUpModal;
