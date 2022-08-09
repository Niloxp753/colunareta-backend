import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { InstitutionModule } from './institution/institution.module';
import { StudantsModule } from './studants/studants.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, InstitutionModule, StudantsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
