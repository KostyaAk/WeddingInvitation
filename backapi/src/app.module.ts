import { Module } from '@nestjs/common';
import { RsvpModule } from './rsvp/rsvp.module';

@Module({
  imports: [RsvpModule],
})
export class AppModule {}
