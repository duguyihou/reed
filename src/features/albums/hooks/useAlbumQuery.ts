import {useQuery} from '@tanstack/react-query';
import {getAlbum} from '../apis';

const useAlbumQuery = (id: string) => {
  const result = useQuery({
    queryKey: ['ablum'],
    queryFn: async () => await getAlbum(id),
    retry: 3,
  });
  return result;
};

export default useAlbumQuery;
