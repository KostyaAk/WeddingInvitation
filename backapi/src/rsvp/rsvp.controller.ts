import { Body, Controller, Post } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { CreateRsvpDto } from './dto/create.dto';

@Controller('rsvp')
export class RsvpController {
  constructor(private readonly service: RsvpService) {}

  @Post()
  async create(@Body() dto: CreateRsvpDto) {
    await this.service.sendToTelegram(dto);
    return { status: 'ok' };
  }
}
