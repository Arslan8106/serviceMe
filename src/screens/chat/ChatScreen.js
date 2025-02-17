import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../../assets/styles/InboxScreenStyle';
import React, { useState} from 'react';
import {View} from 'react-native';
import colors from '../../assets/colors/colors';
import axios from 'axios';
import _ from 'lodash';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Toast from 'react-native-toast-message';

const ChatScreen = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNLPResponse = async () => {
    Keyboard.dismiss();
    // const apiKey = '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'; // Replace with your API key

    const data = {
      model: 'gpt-4o-mini',
      messages: [{role: 'user', content: inputText}],
      max_tokens: 300,
      temperature: 0.7,
    };

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };

    try {
      setLoading(true);
      Toast.show({
        type: 'success',
        text1: 'Finding Solution.....',
        visibilityTime: 1500,
      });
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        data,
        {headers},
      );
      console.log('API Response:', res.data);
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error(
        'Error fetching response:',
        error.response?.data || error.message,
      );
      setResponse('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.midLightBlack,
        flex: 1,
        paddingTop: '6%',
      }}>
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
            value={inputText}
            onChangeText={inputText => setInputText(inputText)}
          />
          {inputText &&
          <TouchableOpacity onPress={() => fetchNLPResponse()}>
            <View style={styles.sendMessageWrapper}>
              <Text style={styles.sendMessageText}>Send</Text>
            </View>
          </TouchableOpacity>
          }
          {!_.isEmpty(response) && (
            <TouchableOpacity
              onPress={() => {
                setResponse('');
                setInputText('');
              }}>
              <View style={styles.sendWhatsappMessageWrapper}>
                <Text style={styles.clearMessageText}>Clear</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            borderBottomColor: colors.lightGrey,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginHorizontal: '5%',
          }}
        />

        {loading ? (
          <View style={styles.skeletonWrapper}>
            <SkeletonPlaceholder backgroundColor={colors.grey}>
              <SkeletonPlaceholder.Item width={350} height={260} />
            </SkeletonPlaceholder>
          </View>
        ) : (
          !_.isEmpty(response) && (
            <View style={styles.responseWrapper}>
              <ScrollView>
                <Text style={styles.responseText}>{response}</Text>
              </ScrollView>
            </View>
          )
        )}
      </View>
    </SafeAreaView>
  );
};
export default ChatScreen;
