import React from 'react';
import {useAlbumQuery} from '../features/albums';
import {Layout} from '../components/layout';
import {AlbumCarousel} from '../features/albums/components/albumCarousel';

const Home = () => {
  const {data} = useAlbumQuery('4aawyAB9vmqN3uQ7FjRGTy');
  console.log('🐵 useAlbumQuery ------data ', data);
  return (
    <Layout headerTitle="Home">
      <AlbumCarousel ids="382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" />
    </Layout>
  );
};

export default Home;
