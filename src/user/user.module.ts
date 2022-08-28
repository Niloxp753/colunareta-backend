import { Module } from '@nestjs/common';
import { EmailService } from 'src/mails/email.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, EmailService],
})
export class UserModule {}
