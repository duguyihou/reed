import {Text, View} from 'react-native';
import React from 'react';
import {useAlbumQuery} from '../features/albums';

const Home = () => {
  const {data} = useAlbumQuery('4aawyAB9vmqN3uQ7FjRGTy');
  console.log('🐵 data ------ ', data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
