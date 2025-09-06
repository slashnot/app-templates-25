import { config } from '@keystone-6/core'
import { lists } from './schema'
import { withAuth, session } from './auth'
import 'dotenv/config'

export default withAuth(
  config({
    db: {
      provider: process.env.DATABASE_TYPE || 'sqlite',
      url: process.env.DATABASE_URL || 'file:./keystone.db',
    },
    lists,
    session,
  })
)
