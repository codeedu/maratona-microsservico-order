import {Controller, Get, Post, Redirect, Render, Req, Request} from '@nestjs/common';
import {Order} from "./order.model";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DriverHttpService} from "./driver-http/driver-http.service";

@Controller('orders') // /orders
export class OrderController {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>,
        private readonly driverHttp: DriverHttpService
    ) {

    }

    @Get()
    @Render('order/index')
    async index() {
        const orders = await this.orderRepo.find({
            order: {
                created_at: 'DESC'
            }
        });
        return {data: orders}
    }

    @Get('/create')
    @Render('order/create')
    async create() {
        const drivers = await this.driverHttp.list().toPromise();
        return {drivers}
    }

    @Post()
    @Redirect('orders')
    async store(@Req() request: Request) {
        const [location_id, location_geo] = request.body['location'].split('/');
        const [driver_id, driver_name] = request.body['driver'].split(',');
        const order = this.orderRepo.create({
            driver_id,
            driver_name,
            location_id,
            location_geo: location_geo.split(',')
        });
        await this.orderRepo.save(order);
    }
}
