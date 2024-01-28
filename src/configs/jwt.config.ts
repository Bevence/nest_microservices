import { registerAs } from '@nestjs/config';

export default registerAs(
  'jwt',
  (): Record<string, any> => ({
    salt: {
      length: 8,
    },
    jwt: {
      secretKey: '123456',
      expirationTime: '1h',
    },
  }),
);
