import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import swaggerInit from './swagger';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const globalPrefix: string = configService.get<string>('app.globalPrefix');

  app.setGlobalPrefix(globalPrefix);

  await swaggerInit(app);

  await app.listen(3000);
}
bootstrap();
