import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { InstitutionModule } from './institution/institution.module';
import { StudantsModule } from './studants/studants.module';
import { ConsultModule } from './consult/consult.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, InstitutionModule, StudantsModule, ConsultModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
