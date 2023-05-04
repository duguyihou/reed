import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {AlbumCard} from '../albumCard';
import useSeveralAlbumsQuery from '../../hooks/useSeveralAlbumsQuery';
import {AlbumCarouselProps} from './AlbumCarousel.types';
import AlbumCarouselPlaceholder from './AlbumCarousel.placeholder';

const AlbumCarousel = (props: AlbumCarouselProps) => {
  const {ids} = props;

  const {data, isLoading} = useSeveralAlbumsQuery(ids);
  if (isLoading) {
    return <AlbumCarouselPlaceholder />;
  }
  const handleSeeMore = () => console.log('🐵  ------ ');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Albums</Text>
        <Button onPress={handleSeeMore} title="See More" />
      </View>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data?.albums}
        renderItem={({item}) => <AlbumCard {...item} />}
        estimatedItemSize={150}
      />
    </View>
  );
};

export default AlbumCarousel;

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
