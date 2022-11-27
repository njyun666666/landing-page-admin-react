export interface IUser {
  id: string;
  avatarUrl: string;
  name: string;
  company: string;
  isVerified: boolean;
  status: string | undefined;
  role: string | undefined;
}
