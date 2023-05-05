import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoryCardProps} from './StoryCard.types';
import {theme} from '../../../../shared/theme';
import FastImage from 'react-native-fast-image';

const StoryCard = (props: StoryCardProps) => {
  const {title, multimedia} = props;
  return (
    <View style={styles.conatiner}>
      <FastImage
        style={styles.image}
        source={{uri: multimedia[1].url}}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={styles.albumName} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  conatiner: {
    width: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  albumName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.dark,
    paddingRight: 10,
  },
  info: {
    fontSize: 14,
    color: theme.grey,
  },
});
