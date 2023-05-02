import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren, memo, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from '../../routes';
import {theme} from '../../shared/theme';

type Options = {headerTitle: string};
type Props = PropsWithChildren & Options;

const TITLE_CONTAINER_HEIGHT = 45;
const isSameHeaderTitle = (prev: Props, next: Props) =>
  prev.headerTitle === next.headerTitle;

const Layout = (props: Props) => {
  const {headerTitle, children} = props;
  const [title, setTitle] = useState('');
  const navigation = useNavigation<HomeStackNavigationProps>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerShadowVisible: false,
    });
  });

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      contentOffset: {y: scrollOffsetY},
    } = nativeEvent;
    setTitle(scrollOffsetY >= TITLE_CONTAINER_HEIGHT ? headerTitle : '');
  };

  return (
    <ScrollView
      style={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{headerTitle}</Text>
      </View>
      {children}
    </ScrollView>
  );
};

export default memo(Layout, isSameHeaderTitle);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: theme.white,
  },
  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
