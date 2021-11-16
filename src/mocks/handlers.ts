import { rest } from 'msw'

// TODO load from .env file
const token = 'Put your token here'

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
