import { Sort } from '../interfaces/utils';

export const formatDisplay = (string: Sort) =>
  typeof string === 'string'
    ? `${string[0].toUpperCase()}${string.slice(1).split('-').join(' ')}`
    : string;

export const formatGHApiUrl = (string: string, regexp?: RegExp) =>
  string
    .replace(/https:\/\/api.github.com\//, '')
    .replace(regexp ? regexp : /(.*?)/, '');
