export interface IUser {
  id: string;
  name: string;
  username: string;
  password_hash: string;
  email: string;
  driver_license: string;
  isAdmin: boolean;
  created_at: Date;
}
