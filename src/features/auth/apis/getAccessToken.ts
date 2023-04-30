import ky, {Options} from 'ky';
import configService from '../../../config';

export const getAccessToken = () => {
  const {baseUrl, clientId, clientSecret} = configService;
  const options: Options = {
    json: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };
  console.log('🐵 options ------ ', options);
  const result = ky.post(`${baseUrl}/api/token`, options).json();
  return result;
};
