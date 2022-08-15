import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultModule } from './consult/consult.module';
import { InstitutionModule } from './institution/institution.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudantsModule } from './studants/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    InstitutionModule,
    StudantsModule,
    ConsultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
