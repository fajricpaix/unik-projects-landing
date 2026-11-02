import HomePage, { homeMetadata } from "@/components/HomePage";

export const metadata = homeMetadata("id");

export default function Home() {
  return <HomePage locale="id" />;
}
