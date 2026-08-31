import { UserRoles } from "../enums/userRoles";
import { UserStatus } from "../enums/userStatus";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: UserRoles;
  status: UserStatus;
}
