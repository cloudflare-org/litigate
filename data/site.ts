import siteData from "@/data/siteData.json";
import caseData from "@/data/case.json";

export const SITE_DATA = {
  ...siteData,
  cases: caseData.cases,
};

const primaryEmail = SITE_DATA.contact.email;
const domain = primaryEmail.split("@")[1] ?? "";

export const SITE_BRAND = {
  appName: siteData.company.name,
  appNameShort: siteData.company.nameShort,
  domain,
  primaryEmail,
  primaryEmailMailto: `mailto:${primaryEmail}`,
  logoAlt: siteData.company.name,
} as const;

export const SITE_CONTACT_LINKS = {
  primaryPhoneTel: `tel:${SITE_DATA.contact.phone}`,
  primaryEmailMailto: `mailto:${SITE_DATA.contact.email}`,
} as const;
