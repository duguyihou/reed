import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {StoryCard} from '../storyCard';
import useSeveralAlbumsQuery from '../../hooks/useStoriesQuery';
import {StoryCarouselProps} from './StoryCarousel.types';
import AlbumCarouselPlaceholder from './StoryCarousel.placeholder';

const AlbumCarousel = (props: StoryCarouselProps) => {
  const {ids} = props;

  const {data, isLoading} = useSeveralAlbumsQuery(ids);
  if (isLoading) {
    return <AlbumCarouselPlaceholder />;
  }
  const handleSeeMore = () => console.log('🐵  ------ ');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Stories</Text>
        <Button onPress={handleSeeMore} title="See More" />
      </View>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data?.albums}
        renderItem={({item}) => <StoryCard {...item} />}
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
