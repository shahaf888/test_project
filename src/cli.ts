import { getData } from './utils';
import dayjs from 'dayjs';

const input = process.argv[2] || 'default';
console.log(`Running CLI with input: ${input}`);
console.log(`Timestamp: ${dayjs().format()}`);
console.log(`Data: ${getData(input)}`);