import { IsArray, IsString } from 'class-validator';

export class CreateEmailDto {
  @IsArray()
  tos: string[];

  @IsString()
  subject: string;

  @IsString()
  template: string;

  @IsString()
  content: string;
}
