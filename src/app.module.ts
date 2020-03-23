import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrderModule } from './order/order.module';
import {AppService} from "./app.service";
import {CommandsModule} from "./commands/commands.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./order/order.model";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
         envFilePath: '.env'
      }),
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: 3306,
          username: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: 'micro_orders',
          entities: [Order],
      }),
      OrderModule,
      CommandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
