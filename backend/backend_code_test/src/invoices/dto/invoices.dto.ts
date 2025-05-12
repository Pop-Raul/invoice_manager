import { IsNumber, IsString, IsBoolean, IsDateString } from 'class-validator';

export class InvoiceDto {
  @IsNumber()
  id: number;

  @IsString()
  vendorName: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  dueDate: string;

  @IsString()
  description: string;

  @IsBoolean()
  paid: boolean;

  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;

  @IsNumber()
  userId: number;
}
