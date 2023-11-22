import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  Logger.log('Start', 'gRPC');
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.GRPC,
      options: {
        url: '127.0.0.1:5001',
        package: AppModule.protoPackages,
        protoPath: AppModule.protoPaths,
      },
    });

  await microservice.listen();

  Logger.log('Start', 'HTTP');
  const http = await NestFactory.create<NestExpressApplication>(AppModule);
  await http.listen(3001);
}
bootstrap();
