import {useQuery} from '@tanstack/react-query';
import {getSeveralAlbums} from '../apis';

const useSeveralAlbumsQuery = (ids: string) => {
  const result = useQuery({
    queryKey: ['ablums'],
    queryFn: async () => await getSeveralAlbums(ids),
    retry: 3,
  });
  return result;
};

export default useSeveralAlbumsQuery;
