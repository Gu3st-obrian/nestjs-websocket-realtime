import { Inject, Injectable } from "@nestjs/common";
import { WebsocketGateway } from "./websocket.gateway";

@Injectable()
export class WebsocketService {
    constructor(@Inject('CONNECTION') private readonly gateway: WebsocketGateway) {}

    public push(payload: {room: string; data: any}) {
        this.gateway.server.to(payload.room).emit('msgToClient', payload.data);
    }
}
