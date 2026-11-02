import HomePage from "@/components/home/HomePage";
import { homeMetadata } from "@/components/home/metadata";

export const metadata = homeMetadata("id");

export default function Home() {
  return <HomePage locale="id" />;
}
