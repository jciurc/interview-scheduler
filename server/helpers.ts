import * as fs from 'fs';
export type IRead = (file: string) => Promise<string>;

// = functions =
export const read: IRead = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf-8' }, (error, data) => {
      error ? reject(error) : resolve(data);
    });
  });
};
