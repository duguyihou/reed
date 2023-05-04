import {useQuery} from '@tanstack/react-query';
import {getSeveralAlbums} from '../apis';
import {albumKeys} from './albumKeys';

const useSeveralAlbumsQuery = (ids: string) => {
  const result = useQuery({
    queryKey: albumKeys.several(ids),
    queryFn: async () => await getSeveralAlbums(ids),
    retry: 3,
  });
  return result;
};

export default useSeveralAlbumsQuery;
