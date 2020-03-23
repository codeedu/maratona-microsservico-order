import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import {Order} from "../order.model";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ChangeStatusOrderService {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>
    ) {

    }

    @RabbitSubscribe({
        exchange: 'amq.direct',
        routingKey: 'orders.change-status',
        queue: 'micro-orders/change-status'
    })
    public async rpcHandler(message) { //id, status
        const order = await this.orderRepo.findOne(message.id);
        order.status = message.status;
        await this.orderRepo.save(order);
        return 1;
    }
}
