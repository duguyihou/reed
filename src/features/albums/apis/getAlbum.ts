import configService from '../../../configuration';
import {handleError, httpClient} from '../../../utils';
import authService from '../../auth/utils';

const getAlbum = async (id: string) => {
  const {baseUrl} = configService;
  const token = await authService.getToken();
  try {
    const response = await httpClient(`${baseUrl}/v1/albums/${id}`, {
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

export default getAlbum;
