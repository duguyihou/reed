import configService from '../../../configuration';
import {handleError, httpClient} from '../../../utils';
import {Section} from '../../../types';

type Data = {
  status: string;
  copyright: string;
  section: string;
  num_results: number;
  results: Section[];
};

const getSectionList = async (): Promise<Data | undefined> => {
  const {baseUrl, apiKey} = configService;
  try {
    const url = `${baseUrl}/svc/news/v3/content/section-list.json?api-key=${apiKey}`;
    const response = await httpClient(url);
    const sectionList = await response.json();
    return sectionList;
  } catch (error) {
    handleError(error);
  }
};

export default getSectionList;
