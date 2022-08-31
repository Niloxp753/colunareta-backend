import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Coluna Reta')
    .setDescription(
      'O projeto da COLUNA RETA é a criação de uma aplicação web onde os colaboradores de backoffice e administradores poderão acessar as informações colhidas em campo.',
    )
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('users')
    .addTag('institutions')
    .addTag('students')
    .addTag('followUps')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
