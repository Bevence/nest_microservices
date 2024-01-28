import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  (): Record<string, any> => ({
    name: process.env.APP_NAME ?? 'test',
    env: process.env.APP_ENV ?? 'DEVELOPMENT',
    globalPrefix: '/api/v1',
  }),
);
