import { redirect } from "next/navigation";

export default function EnrollRedirect() {
  redirect("/course#enroll");
}
