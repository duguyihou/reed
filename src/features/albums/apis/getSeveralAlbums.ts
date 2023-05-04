import configService from '../../../configuration';
import {handleError, httpClient} from '../../../utils';
import authService from '../../auth/utils';
import {Album} from '../types';

type Data = {
  albums: Album[];
};
const getSeveralAlbums = async (ids: string): Promise<Data | undefined> => {
  const {baseUrl} = configService;
  const token = await authService.getToken();
  try {
    const params = new URLSearchParams({ids});
    const response = await httpClient(`${baseUrl}/v1/albums?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const album = await response.json();
    return album;
  } catch (error) {
    handleError(error);
  }
};

export default getSeveralAlbums;