import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_5_MINUTES)
  handleCron() {
    this.logger.debug('Called every 5 minute ' + new Date());
  }

  @Interval(30000)
  handleInterval() {
    this.logger.debug('Called every 30 seconds ' + new Date());
  }
}
