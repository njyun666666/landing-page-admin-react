export interface INotificationItem {
  createdAt: Date;
  id: string;
  isUnRead: boolean;
  title: string;
  description: string;
  type: string;
  avatar: any;
}
