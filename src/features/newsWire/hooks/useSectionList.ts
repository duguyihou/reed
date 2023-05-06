import {useQuery} from '@tanstack/react-query';
import {getSectionList} from '../apis';

const useSectionList = () => {
  const result = useQuery({
    queryKey: ['section list'],
    queryFn: async () => await getSectionList(),
  });
  return result;
};

export default useSectionList;
