import { getContext } from '@keystone-6/core/context'
import config from '../keystone'
import * as PrismaModule from '@prisma/client'

// Making sure multiple prisma clients are not created during hot reloading
export const keystoneContext = getContext(config, PrismaModule)
export const contextSession = keystoneContext.withSession({})

if (process.env.NODE_ENV !== 'production') {
  globalThis.keystoneContext = keystoneContext
}