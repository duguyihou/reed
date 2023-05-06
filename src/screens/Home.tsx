import React from 'react';
import {Layout} from '../components/layout';
import {StoryCarousel} from '../features/stories';

const Home = () => {
  return (
    <Layout headerTitle="Home">
      <StoryCarousel limit={5} />
    </Layout>
  );
};

export default Home;
