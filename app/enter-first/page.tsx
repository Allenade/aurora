import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants";

export default function EnterFirstRedirect() {
  redirect(ROUTES.CORE_3);
}
