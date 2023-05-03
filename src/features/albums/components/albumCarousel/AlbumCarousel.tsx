import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {AlbumCard} from '../albumCard';
import useSeveralAlbumsQuery from '../../hooks/useSeveralAlbumsQuery';
import {AlbumCarouselProps} from './AlbumCarousel.types';

const AlbumCarousel = (props: AlbumCarouselProps) => {
  const {ids} = props;

  const {data} = useSeveralAlbumsQuery(ids);
  if (!data) {
    return <Text>loading....</Text>;
  }
  return (
    <View style={styles.container}>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.albums}
        renderItem={({item}) => <AlbumCard {...item} />}
        estimatedItemSize={80}
      />
    </View>
  );
};

export default AlbumCarousel;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
