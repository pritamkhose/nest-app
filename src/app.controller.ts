import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { I18n, I18nContext, I18nLang } from 'nestjs-i18n';

@Controller()
@ApiTags('Home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/i18n')
  getI18n(@I18n() i18n: I18nContext, @I18nLang() lang: string) {
    return {
      msg: i18n.t(`test.greet_hello`),
      date: new Date().toISOString(),
      lang,
      test: i18n.t(`test`),
    };
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
