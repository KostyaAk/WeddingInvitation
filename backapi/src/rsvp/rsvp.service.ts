import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateRsvpDto } from './dto/create.dto';

@Injectable()
export class RsvpService {
  async sendToTelegram(data: CreateRsvpDto) {
    try {
      const text = `
    Подтверждение от: ${data.name}
    Присутствие: ${data.attending}
    Гостей: ${data.guests}
    Трансфер: ${data.transfer}
    Ночёвка: ${data.overnight}`;

      const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

      await axios.post(url, {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
