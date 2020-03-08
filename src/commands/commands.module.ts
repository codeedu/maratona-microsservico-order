import {HttpModule, Module} from '@nestjs/common';
import {ConsoleModule} from "nestjs-console";
import { FixturesService } from './fixtures/fixtures.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "../order/order.model";
import {DriverHttpService} from "../order/driver-http/driver-http.service";

@Module({
    imports: [
        ConsoleModule,
        TypeOrmModule.forFeature([ Order]),
        HttpModule
    ],
    providers: [FixturesService, DriverHttpService]
})
export class CommandsModule {}

