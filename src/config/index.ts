import Config from 'react-native-config';

const configService = {
  authUrl: Config.AUTH_URL,
  baseUrl: Config.BASE_URL,
  clientId: Config.CLIENT_ID,
  clientSecret: Config.CLIENT_SECRET,
};

export default configService;
