import {useQuery} from '@tanstack/react-query';
import {getAlbum} from '../apis';
import {albumKeys} from './albumKeys';

const useAlbumQuery = (id: string) => {
  const result = useQuery({
    queryKey: albumKeys.one(id),
    queryFn: async () => await getAlbum(id),
    retry: 3,
  });
  return result;
};

export default useAlbumQuery;
