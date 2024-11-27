import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    UsersModule,
    new FastifyAdapter(),
  );
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  await app.listen(3011, '0.0.0.0');
}
bootstrap();
