import { registerAs } from '@nestjs/config';

export default registerAs(
  'auth',
  (): Record<string, any> => ({
    accessToken: {
      secretKey: process.env.AUTH_JWT_ACCESS_TOKEN_SECRET_KEY ?? '123456',
      expirationTime: process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED ?? '1h',
    },

    refreshToken: {
      secretKey: process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ?? '123456000',
      expirationTime: process.env.AUTH_JWT_REFRESH_TOKEN_EXPIRED ?? '14d',
    },
  }),
);
