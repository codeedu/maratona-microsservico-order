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
        RabbitMQModule.forRootAsync(RabbitMQModule, {
            useFactory: () => {
                return {uri: `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:5672`}

            },
        }),
        // RabbitMQModule.forRoot(RabbitMQModule, {
        //     uri: `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:5672`,
        //
        // }),
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
