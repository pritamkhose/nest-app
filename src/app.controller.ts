import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { I18n, I18nContext, I18nLang } from 'nestjs-i18n';

@Controller()
@ApiTags('Home')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get('/i18n')
  async getI18n(@I18n() i18n: I18nContext, @I18nLang() lang: string) {
    const cacheKey = `i18n_${lang}`;
    let data = await this.cacheManager.get(cacheKey);
    console.log('i18n cache -->', cacheKey, data);
    if (!data) {
      data = {
        msg: i18n.t(`test.greet_hello`),
        date: new Date().toISOString(),
        lang,
        test: i18n.t(`test`),
      };
      await this.cacheManager.set(cacheKey, data, 60_000);
    }
    return data;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
