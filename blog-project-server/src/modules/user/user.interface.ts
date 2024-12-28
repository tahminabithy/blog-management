import { string } from "zod";

interface Iuser {
  name: string;
  email: string;
  password: string;
  role: "Admin" | "User";
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
interface authUser {
  email: string;
  password: string;
}

export type { Iuser, authUser };
