import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './create.email.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async send(
    tos: string[],
    subject: string,
    templateName: string,
    context: any = {},
  ): Promise<any> {
    await this.mailerService.sendMail({
      to: tos.join(', '),
      subject,
      template: `./${templateName}`,
      context,
    });
    return { status: 1 };
  }
}
