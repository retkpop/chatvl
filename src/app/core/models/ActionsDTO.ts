import { Action } from '@app/core/models/enum/Action';

export class ActionsDTO {
  id: number;
  createdDate: DateTimeFormat;
  lastUpdate: DateTimeFormat;
  post_id: number;
  action: Action;
}
