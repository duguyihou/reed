import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {SectionProps} from './Section.types';
import {theme} from '../../../../shared/theme';

const Section = (props: SectionProps) => {
  const {display_name} = props;
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{display_name}</Text>
    </Pressable>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    padding: 2,
    borderRadius: 4,
    backgroundColor: theme.secondary,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
});
