import {Dimensions, StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {StoryCardProps} from './StoryCard.types';
import {theme} from '../../../../shared/theme';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps, RouteName} from '../../../../routes';

const StoryCard = (props: StoryCardProps) => {
  const {title, multimedia, url} = props;
  const navigation = useNavigation<HomeStackNavigationProps>();

  const handlePress = () => {
    navigation.push(RouteName.Article, {url});
  };
  return (
    <Pressable style={styles.conatiner} onPress={handlePress}>
      <FastImage
        style={styles.image}
        source={{uri: multimedia[1].url}}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 5,
    borderBottomColor: theme.secondary,
    borderBottomWidth: 1,
  },
  image: {
    width: Dimensions.get('window').width - 20,
    aspectRatio: 3 / 2,
    borderRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.dark,
  },
});
