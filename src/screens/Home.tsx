import React from 'react';
import {Layout} from '../components/layout';
import {StoryCarousel, useStoryQuery} from '../features/stories';

const Home = () => {
  const {data} = useStoryQuery('4aawyAB9vmqN3uQ7FjRGTy');
  console.log('🐵 useAlbumQuery ------data ', data);
  const ids =
    '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc';
  return (
    <Layout headerTitle="Home">
      <StoryCarousel ids={ids} />
    </Layout>
  );
};

export default Home;
