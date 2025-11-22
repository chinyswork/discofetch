import type { RuntimeConfig } from '../types/index'

export function augmentClient(config: RuntimeConfig) {
  return `
import type { paths, components } from './typescript/types.d.ts';

import createClient from 'openapi-fetch';

export const dfetch = createClient<paths>(${JSON.stringify(config, null, 2)});

export type Dfetch = typeof dfetch;

export type DfetchPaths = paths;
export type DfetchComponents = components;
`
}
