import {StyleSheet} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import {HomeRouteType, RouteName} from '../routes';
const Article = () => {
  const {
    params: {url},
  } = useRoute<HomeRouteType<RouteName.Article>>();

  return <WebView style={styles.container} source={{uri: url}} />;
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
