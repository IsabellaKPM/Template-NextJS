import { UserRoles } from "../enums/userRoles.enum";
import { UserStatus } from "../enums/userStatus.enum";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: UserRoles;
  status: UserStatus;
}
