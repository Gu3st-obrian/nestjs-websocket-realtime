import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WebsocketController } from './websocket.controller';
import { WebsocketGateway } from './websocket.gateway';
import { WebsocketService } from './websocket.service';

const aliasGateway = {
  provide: 'CONNECTION',
  useExisting: WebsocketGateway,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [WebsocketController],
  providers: [WebsocketService, WebsocketGateway, aliasGateway]
})
export class WebsocketModule {}
