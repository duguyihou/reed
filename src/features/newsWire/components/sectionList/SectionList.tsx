import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useSectionList from '../../hooks/useSectionList';
import {FlashList} from '@shopify/flash-list';
import {SectionListProps} from './SectionList.types';
import {theme} from '../../../../shared/theme';
import Section from '../section/Section';

const SectionList = (props: SectionListProps) => {
  const {limit} = props;
  const {data, isLoading} = useSectionList();
  if (isLoading) {
    return <Text>loading...</Text>;
  }
  console.log('🐵 data ------ ', data?.results.length);
  const handleSeeMore = () => console.log('🐵  ------ ', data?.results.length);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Section</Text>
        {limit && (
          <Button color={theme.red} onPress={handleSeeMore} title="See More" />
        )}
      </View>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data?.results.slice(0, limit)}
        renderItem={({item}) => <Section {...item} />}
        estimatedItemSize={30}
      />
    </View>
  );
};

export default SectionList;

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
