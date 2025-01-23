import {
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { CommsService } from './comms.service';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get(':id')
  async getCommById(@Param('id') id: string) {
    try {
      const comm = await this.commsService.getCommByCustomerId(id);

      if (comm == null) {
        throw new NotFoundException(`Customer ${id} does not exist.`);
      }

      return comm;
    } catch (err) {
      if (err instanceof Error) {
        if (err instanceof HttpException) {
          throw err;
        }

        throw new InternalServerErrorException(
          `Failed to get comms for customer ${id} - ${err.message}`,
        );
      }

      throw new InternalServerErrorException(
        `Failed to get comms for customer ${id}. Unknown error.`,
      );
    }
  }
}
