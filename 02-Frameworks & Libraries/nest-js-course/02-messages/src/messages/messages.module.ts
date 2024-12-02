import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessageRepository } from './messages.repository';

@Module({
  providers: [MessageRepository, MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
