import {useQuery} from '@tanstack/react-query';
import getTopStories from '../apis';
import {storyKeys} from './storyKeys';

const useTopStoriesQuery = (section = 'home') => {
  const result = useQuery({
    queryKey: storyKeys.list(section),
    queryFn: async () => await getTopStories(section),
    retry: 3,
  });
  return result;
};

export default useTopStoriesQuery;
