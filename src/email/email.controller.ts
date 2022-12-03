import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './create.email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('transmission')
  async send(@Body() createEmailDto: CreateEmailDto): Promise<any> {
    return await this.emailService.send(
      createEmailDto.tos,
      createEmailDto.subject,
      createEmailDto.template,
      { content: createEmailDto.content },
    );
  }
}
