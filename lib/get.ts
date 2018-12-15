import * as urlLib from 'url';
import * as https from 'https';

export function get(url: string): Promise<string> {
  const parsedURL = urlLib.parse(url);

  return new Promise((resolve, reject) => {
    https.get(
      {
        host: parsedURL.host,
        path: parsedURL.path,
        headers: {
          Cookie: 'session=53616c7465645f5f9df024e6350b185ccfacae971b9d262276bec64856b62e9ab4444c9d8ec54e17372df306545dc4b3',
        },
      },
      (res) => {
        let data = '';

        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          resolve(data.trim());
        });
      }).on('error', (e) => {
        reject(`HTTP error: ${e.message}`);
      }
    );
  });
}

export async function getLines(url: string): Promise<string[]> {
  const data = await get(url);

  return data.split(/\n/);
}
