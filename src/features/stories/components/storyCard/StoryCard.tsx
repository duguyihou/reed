import {Dimensions, StyleSheet, Text, View} from 'react-native';
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
      <Text style={styles.title}>{title}</Text>
    </View>
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
