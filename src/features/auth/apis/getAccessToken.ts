import ky, {Options} from 'ky';
import configService from '../../../config';
import {Buffer} from 'buffer';

type TokenType = 'Bearer';
type AccessToken = {
  access_token: string;
  token_type: TokenType;
  expires_in: number;
};
export const getAccessToken = () => {
  const {baseUrl, clientId, clientSecret} = configService;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`);
  const options: Options = {
    body: 'grant_type=client_credentials',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials.toString('base64')}`,
    },
  };
  const result = ky.post(`${baseUrl}/api/token`, options).json<AccessToken>();
  return result;
};
