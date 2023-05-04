import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AlbumCardProps} from './AlbumCard.types';
import {theme} from '../../../../shared/theme';
import FastImage from 'react-native-fast-image';

const AlbumCard = (props: AlbumCardProps) => {
  const {name: albumName, release_date, images, artists} = props;
  const artistName = artists ? artists[0].name : '';
  const releaseDate = release_date.slice(0, 4);
  return (
    <View style={styles.conatiner}>
      <FastImage
        style={styles.image}
        source={{uri: images[1].url}}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={styles.albumName} numberOfLines={1}>
        {albumName}
      </Text>
      <Text
        style={styles.info}
        numberOfLines={1}>{`${releaseDate} - ${artistName}`}</Text>
    </View>
  );
};

export default AlbumCard;

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
