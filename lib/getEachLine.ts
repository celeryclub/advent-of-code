import * as url from 'url';
import * as https from 'https';

export default function _getEachLine(rawURL): Promise<string[]> {
  const parsedURL = url.parse(rawURL);

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
        let rawData = '';

        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          const splitData = rawData.split(new RegExp('\n'));
          resolve(splitData.filter((item) => {
            return item.length;
          }));
        });
      }).on('error', (e) => {
        reject(`HTTP error: ${e.message}`);
      }
    );
  });
}
