import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import { join } from 'path';
import * as expressHbs from 'express-handlebars';
import * as handlebarsHelpers from 'handlebars-helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));

  const hbs = expressHbs.create({
    helpers: {...handlebarsHelpers(), MICRO_MAPPING_URL: () => process.env.MICRO_MAPPING_URL},
    extname: '.hbs',
    defaultLayout: 'layout',
    partialsDir: [
      join(__dirname, '..', 'views')
    ]
  });

  app.engine('hbs', hbs.engine);
  app.setViewEngine('hbs');

  await app.listen(process.env.APP_PORT);
}
bootstrap();
