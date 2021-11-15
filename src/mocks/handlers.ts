import { rest } from 'msw'
import { nanoid } from '@reduxjs/toolkit'

const token = nanoid()

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.delay(400),
      ctx.json({
        user: {
          name: (req.body as any).username,
        },
        token,
      })
    )
  }),
]
