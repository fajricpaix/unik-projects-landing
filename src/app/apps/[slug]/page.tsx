import AppDetail, { appMetadata } from "@/components/AppDetail";
import { APPS } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return APPS.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: PageProps<"/apps/[slug]">) {
  return appMetadata((await params).slug, "id");
}

export default async function AppPage({ params }: PageProps<"/apps/[slug]">) {
  return <AppDetail slug={(await params).slug} locale="id" />;
}
