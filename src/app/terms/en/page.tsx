import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { legalMetadata } from "@/components/legal/metadata";

const description =
  "Terms of Service for the Unik Projects website, Android apps, and games: acceptable use, intellectual property, limitation of liability, and governing law.";

export const metadata = legalMetadata("/terms", "en", description);

export default function TermsEn() {
  return (
    <LegalPage
      path="/terms"
      locale="en"
      description={description}
      intro="Applies to the website, apps, and games developed by Unik Projects."
      highlights={[
        "Use the Service fairly: no cheats, bots, or bug exploitation.",
        "Unik Projects code, design, and brand are protected intellectual property.",
        "These terms are governed by the laws of the Republic of Indonesia.",
      ]}
      sections={[
        {
          id: "acceptance",
          title: "Acceptance of Terms",
          body: <p>By accessing our website or using our apps and games (the &ldquo;Service&rdquo;), you agree to these Terms of Service. If you do not agree, please stop using the Service.</p>,
        },
        {
          id: "use-of-service",
          title: "Use of the Service",
          body: <>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Decompile, copy, or modify our apps without written permission</li>
              <li>Interfere with or damage the Service, including through cheats, bots, or bug exploitation</li>
            </ul>
          </>,
        },
        {
          id: "intellectual-property",
          title: "Intellectual Property",
          body: <p>All content in the Service, including code, design, graphics, audio, and the Unik Projects brand, belongs to us or our licensors and is protected by applicable law. You receive a limited, non-exclusive, non-transferable license to use the Service for personal use.</p>,
        },
        {
          id: "third-party",
          title: "Ads and Third-Party Services",
          body: (
            <p>
              Our Service may display ads or link to third-party services. We are not responsible for the content, policies, or practices of those third parties. How we use data is described in our{" "}
              <Link href="/privacy-policy/en">Privacy Policy</Link>.
            </p>
          ),
        },
        {
          id: "disclaimer",
          title: "Disclaimer of Warranties",
          body: <p>The Service is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not guarantee that the Service will always be available, error-free, or uninterrupted.</p>,
        },
        {
          id: "limitation-of-liability",
          title: "Limitation of Liability",
          body: <p>To the extent permitted by law, Unik Projects is not liable for any direct, indirect, or consequential damages arising from your use of, or inability to use, the Service.</p>,
        },
        {
          id: "changes",
          title: "Changes to the Service and Terms",
          body: <p>We may modify, suspend, or discontinue the Service at any time, and may update these Terms of Service. Changes are announced by updating the &ldquo;Last updated&rdquo; date on this page. Continued use of the Service means you accept the changes.</p>,
        },
        {
          id: "governing-law",
          title: "Governing Law",
          body: <p>These Terms of Service are governed by the laws of the Republic of Indonesia.</p>,
        },
      ]}
    />
  );
}
