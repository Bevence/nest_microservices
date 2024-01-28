import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [CommonModule, KafkaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
