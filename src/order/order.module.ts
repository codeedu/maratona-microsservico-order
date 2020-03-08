import {HttpModule, Module} from '@nestjs/common';
import {OrderController} from "./order.controller";
import {Order, } from "./order.model";
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ChangeStatusOrderService } from './change-status-order/change-status-order.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { OrderSubscriberService } from './order-subscriber/order-subscriber.service';
import { DriverHttpService } from './driver-http/driver-http.service';

@Module({
    imports: [
        RabbitMQModule.forRoot(RabbitMQModule, {
            uri: 'amqp://admin:admin@rabbitmq:5672',

        }),
        TypeOrmModule.forFeature([Order]),
        HttpModule
    ],
    controllers: [OrderController],
    providers: [
        ChangeStatusOrderService,
        OrderSubscriberService,
        DriverHttpService,
    ]
})
export class OrderModule {
}
