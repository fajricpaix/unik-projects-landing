import LegalPage, { legalMetadata } from "@/components/LegalPage";

const description =
  "Privacy Policy for Unik Projects Android apps and games: what data we collect, how ads (AdMob) and analytics (Firebase) are used, and your rights over your personal data.";

export const metadata = legalMetadata("/privacy-policy", "en", description);

export default function PrivacyPolicyEn() {
  return (
    <LegalPage
      path="/privacy-policy"
      locale="en"
      description={description}
      intro="This Privacy Policy was created to meet the requirements of the Google Play Console submission. It applies to apps and games developed by Unik Projects."
      highlights={[
        "We do not sell users' personal data to third parties.",
        "Ads and analytics use Google services: AdMob and Firebase.",
        "You can request deletion of your personal data by email.",
      ]}
      sections={[
        {
          id: "introduction",
          title: "Introduction",
          body: (
            <p>
              Unik Projects (&ldquo;we&rdquo;) values the privacy of the users
              of our apps and games (the &ldquo;Service&rdquo;). This Privacy
              Policy explains how we collect, use, and protect information
              when you use our Service. By using our apps, you agree to the
              practices described in this policy.
            </p>
          ),
        },
        {
          id: "information-we-collect",
          title: "Information We Collect",
          body: (
            <>
              <p>
                Depending on the app you use, we may collect the following
                information:
              </p>
              <ul>
                <li>
                  <strong>Device Data</strong> — Device model, operating
                  system version, application identifiers (such as
                  Advertising ID), and other technical information required
                  for the app to run properly.
                </li>
                <li>
                  <strong>Usage Data</strong> — How you interact with the
                  app, such as features used, session duration, and app
                  performance statistics (crash reports).
                </li>
                <li>
                  <strong>Voluntarily Provided Data</strong> — If you contact
                  us by email or fill out a form, we will receive the
                  information you provide (such as your name and email
                  address).
                </li>
              </ul>
              <p>
                We do <strong>not</strong> request or store sensitive data
                such as third-party account passwords, financial data, or
                official identity documents.
              </p>
            </>
          ),
        },
        {
          id: "advertising-analytics",
          title: "Advertising and Analytics",
          body: (
            <>
              <p>
                Our apps may use the following third-party services to
                support operations and development:
              </p>
              <ul>
                <li>
                  <strong>Google AdMob</strong> — to display ads within the
                  app. AdMob may collect the Advertising ID and related data
                  to display relevant ads.
                </li>
                <li>
                  <strong>Google Analytics / Firebase</strong> — to
                  understand how users use our apps, so we can continuously
                  improve the user experience, as well as for crash
                  reporting.
                </li>
              </ul>
              <p>These third-party services have their own privacy policies:</p>
              <ul>
                <li>
                  Google Privacy Policy:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    policies.google.com/privacy
                  </a>
                </li>
                <li>
                  How Google uses data from apps that use Google services:{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    policies.google.com/technologies/partner-sites
                  </a>
                </li>
              </ul>
              <p>
                You can reset or disable the Advertising ID through your
                Android device settings (Settings &gt; Google &gt; Ads).
              </p>
            </>
          ),
        },
        {
          id: "app-permissions",
          title: "App Permissions",
          body: (
            <p>
              Some of our apps/games may request certain permissions (such as
              internet access, storage, or notifications) that are required
              for app features to work. We only request permissions that are
              genuinely needed, and these permissions will be explained when
              requested within the app.
            </p>
          ),
        },
        {
          id: "how-we-use-information",
          title: "How We Use Information",
          body: (
            <>
              <p>The information collected is used to:</p>
              <ul>
                <li>Operate and maintain app functionality</li>
                <li>Display relevant ads (if any)</li>
                <li>Analyze and improve app performance and user experience</li>
                <li>Fix bugs and technical issues</li>
                <li>Respond to user questions or feedback</li>
              </ul>
              <p>
                We do <strong>not sell</strong> users&rsquo; personal data to
                third parties.
              </p>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          title: "Children's Privacy",
          body: (
            <p>
              Our Service is intended for a general audience, including teens
              (age 13 and up). We do not knowingly collect personal data from
              children under 13 without parental/guardian consent, in
              accordance with Google Play Families policy and applicable child
              data protection regulations. If you are a parent/guardian and
              become aware that your child has provided personal data to us
              without permission, please contact us so that the data can be
              deleted.
            </p>
          ),
        },
        {
          id: "data-security",
          title: "Data Security",
          body: (
            <p>
              We implement reasonable security measures to protect the
              information we collect. However, no method of data transmission
              over the internet is 100% secure, so we cannot guarantee
              absolute security.
            </p>
          ),
        },
        {
          id: "data-retention",
          title: "Data Storage and Retention",
          body: (
            <p>
              Collected data is stored for as long as necessary for the
              purposes described in this policy, or as required by applicable
              law.
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "Your Rights",
          body: (
            <>
              <p>You have the right to:</p>
              <ul>
                <li>Request information about the data we hold about you</li>
                <li>Request deletion of your personal data</li>
                <li>
                  Opt out of the use of data for personalized advertising
                  (via the Advertising ID settings on your device)
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us via the email
                below.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          title: "Changes to This Privacy Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be communicated by updating the &ldquo;Last updated&rdquo;
              date on this page. We recommend that you review this page
              periodically.
            </p>
          ),
        },
      ]}
    />
  );
}
