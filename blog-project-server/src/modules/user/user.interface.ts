export interface Iuser {
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface authUser {
  email: string;
  password: string;
}
