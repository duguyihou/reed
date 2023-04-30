import {Text, View} from 'react-native';
import React from 'react';
import {useAccessToken} from '../features/auth/hooks';

const Home = () => {
  const {data} = useAccessToken();
  console.log('🐵 data ------ ', data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
