import HomePage from "@/components/home/HomePage";
import { homeMetadata } from "@/components/home/metadata";

export const metadata = homeMetadata("en");

export default function HomeEn() {
  return <HomePage locale="en" />;
}
