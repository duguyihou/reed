import {useQuery} from '@tanstack/react-query';
import {getAccessToken} from '../apis';
import authService from '../utils';

const useAccessToken = () => {
  const result = useQuery<string, Error>({
    queryKey: ['access token'],
    queryFn: async () => await getAccessToken(),
  });
  authService.setToken(result.data);
};

export default useAccessToken;
