import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.error('get token failed');
  }
};
const setToken = async (value: string | undefined) => {
  try {
    value
      ? await AsyncStorage.setItem('token', value)
      : await AsyncStorage.removeItem('token');
  } catch (error) {
    console.error('set token failed');
  }
};
const authService = {
  setToken,
  getToken,
};

export default authService;
