import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import configs from 'src/configs';
import { ENUM_APP_ENVIRONMENT } from 'src/constants/app.enum.constants';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
      validationSchema: Joi.object({
        APP_NAME: Joi.string().required(),
        APP_ENV: Joi.string()
          .valid(...Object.values(ENUM_APP_ENVIRONMENT))
          .default('development')
          .required(),

        HTTP_PORT: Joi.number().default(3000).required(),

        AUTH_JWT_ACCESS_TOKEN_SECRET_KEY: Joi.string()
          .alphanum()
          .min(5)
          .max(50)
          .required(),
        AUTH_JWT_ACCESS_TOKEN_EXPIRED: Joi.string().default('15m').required(),

        AUTH_JWT_REFRESH_TOKEN_SECRET_KEY: Joi.string()
          .alphanum()
          .min(5)
          .max(50)
          .required(),
        AUTH_JWT_REFRESH_TOKEN_EXPIRED: Joi.string().default('7d').required(),

        KAFKA_CLIENT_ID: Joi.string().default('KAFKA_ACK').required(),
        KAFKA_ADMIN_CLIENT_ID: Joi.string()
          .default('KAFKA_ADMIN_ACK')
          .required(),
        KAFKA_BROKERS: Joi.string().default('localhost:9092').required(),
        KAFKA_CONSUMER_ENABLE: Joi.boolean().default(true).required(),
        KAFKA_CONSUMER_GROUP: Joi.string().default('nestjs.ack').required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
})
export class CommonModule {}
