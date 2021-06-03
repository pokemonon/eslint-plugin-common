import * as path from 'path';

import { call } from './utils';

export function log(str: string) {
    console.log(str);
}

export { call };

export const resolve = (...p: string[]) => path.resolve(__dirname, ...p);