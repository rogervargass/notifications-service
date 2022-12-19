import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from '@app/use-cases/send-notification/send-notification';
import { CancelNotification } from '@app/use-cases/cancel-notification/cancel-notification';
import { ReadNotification } from '@app/use-cases/read-notification/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification/unread-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
