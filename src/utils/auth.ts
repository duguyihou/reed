import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.error('get token failed');
  }
};
export const setToken = async (value: string | null) => {
  try {
    console.log('🐵 setoken ------ value', value);
    value
      ? await AsyncStorage.setItem('token', value)
      : await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('set token failed');
  }
};
