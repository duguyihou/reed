import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {StoryCard} from '../storyCard';
import useTopStoriesQuery from '../../hooks/useTopStoriesQuery';
import StoryCarouselPlaceholder from './StoryCarousel.placeholder';

const StoryCarousel = () => {
  const {data, isLoading} = useTopStoriesQuery();
  if (isLoading) {
    return <StoryCarouselPlaceholder />;
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
        data={data?.results}
        renderItem={({item}) => <StoryCard {...item} />}
        estimatedItemSize={150}
      />
    </View>
  );
};

export default StoryCarousel;

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
