import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoiceDto } from './dto/invoices.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/invoices')
export class InvoicesController {

   constructor(private invoicesService: InvoicesService) { }


   @Get()
   @UseGuards(AuthGuard('jwt'))
   @HttpCode(HttpStatus.OK)
   async getAllInvoices(): Promise<InvoiceDto[]> {
      return this.invoicesService.getAllInvoices()
   }

   @Get('/:id')
   @UseGuards(AuthGuard('jwt'))
   @HttpCode(HttpStatus.OK)
   async getInvoiceById(@Param('id', ParseIntPipe) id: number): Promise<InvoiceDto> {
      return this.invoicesService.getInvoiceById(id);
   }
}
