import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { withTheme } from '../common/withTheme';

const HTML = require('../assets/login.html');

const MainScreen = ({ theme }: any) => {
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <WebView
        source={HTML}
        style={{ flexGrow: 1, margin: 16, marginTop: 60 }}
      />
    </View>
  );
};
export default withTheme(MainScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold'
  }
});