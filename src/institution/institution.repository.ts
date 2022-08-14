import { Injectable } from '@nestjs/common';
import { Institution } from './entities/institution.entity';

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

  // async updateInstitution(data: Institution): Promise<Bill | undefined> {
  //   let updatedBill: Bill | undefined = undefined;
  //   let billIndex = 0;

  //   this.bills.map((bill, index) => {
  //     updatedBill = bill;
  //     if (bill.id === billUpdate.id) {
  //       billIndex = index;
  //       if (billUpdate.title)
  //         updatedBill = { ...updatedBill, title: billUpdate.title };

  //       if (billUpdate.total)
  //         updatedBill = { ...updatedBill, total: billUpdate.total };
  //       if (billUpdate.isPaid)
  //         updatedBill = { ...updatedBill, isPaid: billUpdate.isPaid };

  //       this.bills.splice(index, 1, updatedBill);
  //     }
  //   });
  //   return Promise.resolve(this.bills[billIndex]);
  // }
}
