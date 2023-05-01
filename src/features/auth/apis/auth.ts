import configService from '../../../config';
import {Buffer} from 'buffer';

type TokenType = 'Bearer';
type AccessToken = {
  access_token: string;
  token_type: TokenType;
  expires_in: number;
};

export const getAccessToken = async () => {
  const {authUrl, clientId, clientSecret} = configService;
  const credentials = Buffer.from(`${clientId}:${clientSecret}`);

  const response = await fetch(`${authUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials.toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });
  const {access_token} = (await response.json()) as AccessToken;
  return access_token;
};
