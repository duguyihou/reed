import configService from '../../../configuration';
import {handleError, httpClient} from '../../../utils';
import {Article} from '../types';

type Data = {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: Article[];
};

const getTopStories = async (section: string): Promise<Data | undefined> => {
  const {baseUrl, apiKey} = configService;
  try {
    const url = `${baseUrl}/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
    const response = await httpClient(url);
    const album = await response.json();
    return album;
  } catch (error) {
    handleError(error);
  }
};

export default getTopStories;
