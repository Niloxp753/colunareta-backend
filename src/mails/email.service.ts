import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  async sendEmail(payload: User) {
    return await this.mailService.sendMail({
      to: payload.email,
      from: 'no-reply@colunareta.com',
      subject: 'Alteração de Senha Padrão',
      template: 'template',
      context: {
        user: payload,
      },
    });
  }
}
