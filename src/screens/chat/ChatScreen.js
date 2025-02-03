import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../../assets/styles/InboxScreenStyle';
import React, {useEffect, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
// import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import colors from '../../assets/colors/colors';
// import LoginSignupModal from "../../components/modal/LoginSignupModal";
// import { useSelector } from "react-redux";
const ChatScreen = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.midLightBlack,
        flex: 1,
        paddingTop: '6%',
      }}>
      {/*<Text style={styles.headingText}>Inbox</Text>*/}
      <View style={styles.screenTwoWrapper}>
        <Text style={styles.headingText}>Describe Your Problem!</Text>
        <View
          style={{
            borderBottomColor: colors.lightGrey,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: '4%',
          }}
        />

        <View style={styles.mainInnerWrapper}>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            placeholder="START TYPING....."
            placeholderTextColor="#707070"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <TouchableOpacity>
            <View style={styles.sendWhatsappMessageWrapper}>
              <Text style={styles.sendMessageText}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: colors.lightGrey,
            borderBottomWidth: StyleSheet.hairlineWidth,
            // marginVertical: "5%",
            marginHorizontal: '5%',
          }}
        />
        <View style={styles.responseWrapper}>
          <Text style={styles.responseText}>Response</Text>
        </View>


      </View>
      {/*{!isAuthenticated && <LoginSignupModal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}*/}
    </SafeAreaView>
  );
};
export default ChatScreen;
