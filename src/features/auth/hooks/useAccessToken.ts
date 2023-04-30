import {useQuery} from '@tanstack/react-query';
import {getAccessToken} from '../apis/getAccessToken';

const useAccessToken = () => {
  const res = useQuery({
    queryKey: ['access token'],
    queryFn: async () => await getAccessToken(),
  });
  return res;
};

export default useAccessToken;
