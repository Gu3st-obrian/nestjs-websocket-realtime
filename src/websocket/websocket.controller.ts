import { Body, Controller, Post } from "@nestjs/common";
import { WebsocketService } from "./websocket.service";

@Controller('remote')
export class WebsocketController {

    constructor(private readonly service: WebsocketService) {}

    @Post("status")
    public remoteData(@Body() payload: {room: string; data: any}) {
        this.service.push(payload);
    }
}
