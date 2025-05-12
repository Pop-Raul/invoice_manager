import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InvoiceDto } from './dto/invoices.dto';
import { toInvoiceDto } from './dto/invoices.converter';

@Injectable()
export class InvoicesService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllInvoices(): Promise<InvoiceDto[]> {
        const invoices = await this.prisma.invoice.findMany();

        return invoices.map(inv => toInvoiceDto(inv));
    }


    async getInvoiceById(id: number): Promise<InvoiceDto> {
        const inv = await this.prisma.invoice.findUnique({ where: { id } });
        if (!inv) throw new NotFoundException(`Invoice with id ${id} not found`);

        return toInvoiceDto(inv);
    }
}