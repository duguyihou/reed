const isPlainObject = (value: unknown) => value?.constructor === Object;

class ResponseError extends Error {
  response: Response;

  constructor(message: string, response: Response) {
    super(message);
    this.response = response;
  }
}

export const handleError = async (err: unknown) => {
  if (err instanceof ResponseError) {
    switch (err.response.status) {
      case 401:
        break;
      case 500:
        break;
      default:
        throw new Error('Unhandled fetch response');
    }
  }
  throw new Error('Unknown fetch error');
};

const httpClient = async (
  input: RequestInfo,
  init?: RequestInit,
): Promise<Response> => {
  let initOptions = init;
  if (initOptions?.body) {
    // If we have passed a body property and it is a plain object or array
    // Create a new options object serializing the body and ensuring we
    // have a content-type header
    if (Array.isArray(initOptions.body) || isPlainObject(initOptions.body)) {
      initOptions = {
        ...initOptions,
        body: JSON.stringify(initOptions.body),
        headers: {
          'Content-Type': 'application/json',
          ...initOptions.headers,
        },
      };
    }
  }
  const res = await fetch(input, initOptions);
  if (!res.ok) {
    throw new ResponseError('Bad response', res);
  }
  return res;
};

export default httpClient;
