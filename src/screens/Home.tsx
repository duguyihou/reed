import React from 'react';
import {useAlbumQuery} from '../features/albums';
import {Layout} from '../components/layout';

const Home = () => {
  const {data} = useAlbumQuery('4aawyAB9vmqN3uQ7FjRGTy');
  console.log('🐵 data ------ ', data);
  return <Layout headerTitle="Home" />;
};

export default Home;
