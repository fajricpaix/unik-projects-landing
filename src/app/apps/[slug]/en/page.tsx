import AppDetail from "@/components/app-detail/AppDetail";
import { appMetadata } from "@/components/app-detail/metadata";
import { APPS } from "@/data/apps";

export const dynamicParams = false;

export function generateStaticParams() {
  return APPS.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: PageProps<"/apps/[slug]/en">) {
  return appMetadata((await params).slug, "en");
}

export default async function AppPageEn({ params }: PageProps<"/apps/[slug]/en">) {
  return <AppDetail slug={(await params).slug} locale="en" />;
}
