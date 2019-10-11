import fetch from 'node-fetch';

const etagMap: Map<string, string> = new Map();
const responseMap: Map<string, any> = new Map();

export async function conditionalFetch<T>(uri: string): Promise<T> {
  let headers: {[x:string]: any} = {
    'Authorization': `token ${process.env.GITHUB_API_KEY}`
  };
  if (etagMap.has(uri)) {
    const etag = etagMap.get(uri) as string;
    headers["If-None-Match"] = etag;
  }
  const response = await fetch(uri, { headers });

  const status = response.status;
  if (status === 304) {
    return responseMap.get(uri) as T;
  }

  if(response.headers.has('etag')) {
    const etag = response.headers.get('etag') as string;
    etagMap.set(uri, etag);
  }

  const data = await response.json();

  responseMap.set(uri, data);

  return data;
}
