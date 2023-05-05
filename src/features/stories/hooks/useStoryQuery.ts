import {useQuery} from '@tanstack/react-query';
import {getStory} from '../apis';
import {storyKeys} from './storyKeys';

const useStoryQuery = (id: string) => {
  const result = useQuery({
    queryKey: storyKeys.one(id),
    queryFn: async () => await getStory(id),
    retry: 3,
  });
  return result;
};

export default useStoryQuery;
