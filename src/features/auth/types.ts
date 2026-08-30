import { Control } from "react-hook-form";
import { LoginFormValues } from "./schemas/login.schema";

export interface LoginFormFieldsProps {
  control: Control<LoginFormValues>;
  loginType: "email" | "username";
  onLoginTypeChange: (type: "email" | "username") => void;
}
