import { getUserByEmail } from '~~/server/db/user'
import type { User, LoginBody } from '~~/types/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginBody>(event)

  let userFromDB: User = {
    id: '',
    email: '',
    password: '',
    roles: [''],
  }

  // Check if email or password is missing
  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required',
    })
  }

  // Check if user exists
  await getUserByEmail(body.email).then((response) => {
    if (!response) {
      throw createError({
        statusCode: 401,
        statusMessage: "This user doesn't exist",
      })
    }
    userFromDB = response
  })

  // Verify password
  await bcrypt
    .compare(body.password, userFromDB.password as string)
    .then((result) => {
      if (!result)
        throw createError({
          statusCode: 401,
          statusMessage: 'Wrong Password',
        })
    })

  // Issue a JWT token
  const jwtPayload = {
    id: userFromDB.id,
    email: userFromDB.email,
    roles: userFromDB.roles,
  }
  const secret = useRuntimeConfig().JWT_secret
  const jwtToken = jwt.sign(jwtPayload, secret, { expiresIn: '24h' })

  // Store the token in a cookie
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 1) /** One day from now */

  setCookie(event, 'access_token', jwtToken, {
    expires: expiresAt,
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production', /** For HTTPS connection */
    sameSite: 'strict',
    path: '/',
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userFromDB

  return {
    user: userWithoutPassword,
  }
})
