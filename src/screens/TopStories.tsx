import React from 'react';
import {Layout} from '../components/layout';
import {StoryCarousel} from '../features/stories';

const TopStories = () => {
  return (
    <Layout headerTitle="Top Stories">
      <StoryCarousel />
    </Layout>
  );
};

export default TopStories;
