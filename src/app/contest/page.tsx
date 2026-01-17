import { redirect } from "next/navigation";

export default function ContestPage() {
  // Permanently redirect to homepage (308 redirect preserves POST requests)
  redirect("/");
}
