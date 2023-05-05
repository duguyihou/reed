import {useQuery} from '@tanstack/react-query';
import {getStories} from '../apis';
import {storyKeys} from './storyKeys';

const useStoriesQuery = (ids: string) => {
  const result = useQuery({
    queryKey: storyKeys.several(ids),
    queryFn: async () => await getStories(ids),
    retry: 3,
  });
  return result;
};

export default useStoriesQuery;
