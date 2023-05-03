import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AlbumCardProps} from './AlbumCard.types';

const AlbumCard = (props: AlbumCardProps) => {
  const {name} = props;
  return (
    <View style={styles.conatiner}>
      <Text>{name}</Text>
    </View>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  conatiner: {
    height: 60,
    width: 300,
    backgroundColor: 'red',
    paddingVertical: 20,
  },
});
