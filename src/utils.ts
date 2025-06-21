import _ from 'lodash';

export function getData(key: string): string {
  const map = {
    default: 'Default value',
    hello: 'Hello World!',
    goodbye: 'Goodbye!',
  };
  return _.get(map, key, 'Unknown key');
}