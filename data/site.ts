import siteData from "@/data/siteData.json";

export const SITE_DATA = siteData;

const primaryEmail = siteData.contact.email;
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
  primaryPhoneTel: `tel:${siteData.contact.phone}`,
  primaryEmailMailto: `mailto:${siteData.contact.email}`,
} as const;
