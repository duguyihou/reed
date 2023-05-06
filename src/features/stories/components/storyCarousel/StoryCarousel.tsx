import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {StoryCard} from '../storyCard';
import useTopStoriesQuery from '../../hooks/useTopStoriesQuery';
import StoryCarouselPlaceholder from './StoryCarousel.placeholder';
import {StoryCarouselProps} from './StoryCarousel.types';
import {theme} from '../../../../shared/theme';

const StoryCarousel = (props: StoryCarouselProps) => {
  const {limit} = props;
  const {data, isLoading} = useTopStoriesQuery();
  if (isLoading) {
    return <StoryCarouselPlaceholder />;
  }
  const handleSeeMore = () => console.log('🐵  ------ ', data?.results.length);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Stories</Text>
      </View>
      <FlashList
        data={data?.results.slice(0, limit)}
        renderItem={({item}) => <StoryCard {...item} />}
        estimatedItemSize={300}
      />
      {limit && (
        <Button color={theme.red} onPress={handleSeeMore} title="See More" />
      )}
    </View>
  );
};

export default StoryCarousel;

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
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
