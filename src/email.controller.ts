import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}

  @ApiOperation({
    summary: 'Envia um email com os dados do novo usuário cadastrado',
  })
  @Post('html-email')
  async postHtmlEmail(@Body() payload) {
    await this.mailService.sendMail({
      to: payload.email,
      from: 'no-reply@colunareta.com',
      subject: 'Alteração de Senha Padrão',
      template: 'template',
      context: {
        user: payload,
      },
    });
    console.log(payload.name);
    console.log(payload);
    return 'success';
  }
}
