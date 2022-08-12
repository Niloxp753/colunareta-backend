import { Injectable } from '@nestjs/common';
import { Institution } from './entities/institution.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitutionRepository {
  institutions: Institution[] = [];
  users: string[];
  // constructor(private prisma: PrismaService) {}
  async createInstitution(data: Institution): Promise<Institution> {
    // const PrismaInst = await this.prisma.institution.create({
    //   data,
    // });
    this.institutions.push(data);
    return data;
    // return PrismaInst
  }

  
}
