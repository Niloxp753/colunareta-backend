import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/models/role.enum';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private mailService: MailerService,
  ) {}

  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  @Post('create')
  async plainTextEmail(@Body() createUserDto: CreateUserDto) {
    await this.mailService.sendMail({
      to: `${createUserDto.email}`,
      from: 'no-reply@colunareta.com',
      subject: 'Alteração de Senha Padrão',
      html: `
      <head>
        <title>Alterar senha padrão</title>
        <meta charset="UTF-8">
      </head>
        <body>
          <div dir="ltr" style="margin:0; padding:0; background-color:#ffffff">
            <table cellspacing="0" cellpadding="0" width="100%;" id="x_email_table" border="0" style="border-collapse:collapse">
              <tbody>
                <tr>
                  <td id="x_email_content" style=" font-family: 'Source Sans Pro', sans-serif; background:#ffffff">
                    <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse">
                      <tbody>
                        <tr style="">
                          <td height="20" colspan="3" style="line-height:20px">&nbsp;</td>
                        </tr>
                          <tr>
                            <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                            <td style="">
                              <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse">
                                  <tbody>
                                      <tr style="">
                                        <td height="16" colspan="3" style="line-height:16px">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td width="100%" style=""><a href="http://localhost:3333/api" target="_blank" style="color:rgb(60,141,188); text-decoration:none; font-family: 'Helvetica Neue', sans-serif; font-size:23px; line-height:32px">Coluna Reta</a></td>
                                      </tr>
                                      <tr style="border-bottom:solid 1px #e5e5e5">
                                        <td height="16" colspan="3" style="line-height:16px">&nbsp;</td>
                                      </tr>
                                  </tbody>
                              </table>
                            </td>
                              <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                            <td style="">
                              <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse">
                                <tbody>
                                  <tr style="">
                                    <td height="28" style="line-height:28px">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td style=""><span style=" font-family: 'Source Sans Pro', sans-serif; font-size:17px; line-height:21px; color:#141823">
                                    <p>Olá ${createUserDto.name},</p>

                                    <p>Clique em alterar senha para obter acesso ao app Coluna Reta e alterar a senha padrão.</p>

                                    <p><a href="http://127.0.0.1:5173/formusuario/email/${createUserDto.id}" target="_blank" style="color:rgb(38,120,214); text-decoration:none">Alterar senha</a></p>

                                    <div><span style="color:#333333; font-weight:bold">Não realizou cadastro em nossa plataforma?</span></div>
                                    <P>Se você não realizou cadastro em nossa plataforma, desconsidere este e-mail.</span></td>
                                  </tr>
                                  <tr style="">
                                    <td height="14" style="line-height:14px">&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                              <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                          </tr>
                            <tr>
                              <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                              <td style="">
                                <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse">
                                  <tbody>
                                    <tr style="">
                                      <td height="2" colspan="3" style="line-height:2px">&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td class="x_mb_blk" style=""></td>
                                      <td width="100%" class="x_mb_hide" style=""></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr>
                                <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                                <td style="">
                                  <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse">
                                    <tbody>
                                      <tr style="border-top:solid 1px #e5e5e5">
                                        <td height="16" style="line-height:16px">&nbsp;</td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: 'Source Sans Pro', sans-serif; font-size:11px; color:#aaaaaa; line-height:16px">
                                        Essa mensagem foi enviada pela equipe de sistemas do app Coluna Reta. (por favor não responda esse email)<br>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              <td width="15" style="display:block; width:15px">&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr style="">
                              <td height="20" colspan="3" style="line-height:20px">&nbsp;</td>
                            </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          <div style="display: none;"></div>

        </body>`,
    });
    console.log(createUserDto.id);
    return await this.userService.create(createUserDto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('find-all')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Lista todos os usuários de forma ordenada e paginada',
  })
  findAll(@Query('page') page: string) {
    return this.userService.findAll(Number(page));
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Visualiza o usuário pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Roles(Role.ADMIN, Role.BACKOFFICE, Role.CAMPO)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Atualiza o usuário pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Patch('email/:id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Atualiza o usuário pelo ID recebido pelo email',
  })
  updateEmail(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Deleta um usuário pelo ID',
  })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
