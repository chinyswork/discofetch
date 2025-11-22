import type { DiscoverConfig } from 'autodisco'
import discover from 'autodisco'

export function runDiscovery(config: DiscoverConfig) {
  return discover({
    ...config,

    generate: config.generate
      ? {
          zod: config.generate.zod,
          typescript: config.generate.typescript ?? true,
        }
      : {
          typescript: true,
        },
  })
}

export type { Config, Paths, RuntimeConfig } from './types'
