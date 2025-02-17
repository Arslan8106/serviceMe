import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import styles from '../../assets/styles/SignupScreenStyle';
import auth from "@react-native-firebase/auth";
import {loginSuccess} from '../../redux/action';
import {useDispatch} from 'react-redux';


const SignupScreen = props => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const Signup = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);;
      const loggedInUser = userCredential.user._user;
      if (loggedInUser) {
        dispatch(loginSuccess(loggedInUser));
        Toast.show({type: 'success', text1: "Account created successfully!", visibilityTime: 1500});
      }
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: (error.response && error.response.data.error) || error.message, visibilityTime: 1500 });
    }
  };
  const signIn = () => {
    navigation.navigate('LoginScreen');
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/serviceMe/logo.png')}
      />
      <View style={styles.mainWrapper}>
        <View
          style={{
            borderBottomColor: colors.white,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: '2%',
            width: '20%',
            opacity: 1,
          }}
        />
        <Text style={styles.signInStyle}>Create account</Text>
        <View style={styles.inputView}>
          <TextInput
            label="Name"
            value={name}
            onChangeText={name => setName(name)}
            placeholder="Name"
            placeholderTextColor="white"
            style={styles.innerTextInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            placeholder="Email"
            placeholderTextColor="white"
            style={styles.innerTextInput}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            label="password"
            value={password}
            onChangeText={password => setPassword(password)}
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.innerTextInput}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.forgotLinksWrapper}>
          <Text style={styles.rememberMeButton}>
            Password must be 6 characters long
          </Text>
        </View>
        <TouchableOpacity onPress={Signup} style={styles.emailSendButton}>
          <Text style={styles.emailSendButtonText}>Next</Text>
        </TouchableOpacity>
        <View style={styles.notAccountWrapper}>
          <TouchableOpacity>
            <Text style={styles.notAccountButton}>Already have account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signIn}>
            <Text style={styles.signUpButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SignupScreen;
