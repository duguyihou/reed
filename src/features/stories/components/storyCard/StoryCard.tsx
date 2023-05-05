import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoryCardProps} from './StoryCard.types';
import {theme} from '../../../../shared/theme';
import FastImage from 'react-native-fast-image';

const StoryCard = (props: StoryCardProps) => {
  const {title, abstract, multimedia} = props;
  return (
    <View style={styles.conatiner}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.abstract} numberOfLines={3}>
          {abstract}
        </Text>
      </View>
      <FastImage
        style={styles.image}
        source={{uri: multimedia[2].url}}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  content: {
    flex: 1,
    marginRight: 5,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.dark,
    paddingRight: 10,
  },
  abstract: {
    fontSize: 14,
    color: theme.grey,
  },
});
