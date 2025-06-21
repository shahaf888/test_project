import { getData } from '../src/utils';

test('returns default', () => {
  expect(getData('default')).toBe('Default value');
});

test('returns hello', () => {
  expect(getData('hello')).toBe('Hello World!');
});

test('returns fallback', () => {
  expect(getData('nonexistent')).toBe('Unknown key');
});