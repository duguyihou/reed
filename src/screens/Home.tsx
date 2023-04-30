import {Text, View} from 'react-native';
import React from 'react';
import {useAccessToken} from '../features/auth/hooks';

const Home = () => {
  const a = useAccessToken();
  console.log('🐵  ------ ', a.error);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
