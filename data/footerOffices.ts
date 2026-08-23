import { SITE_DATA } from "@/data/site";

export const FOOTER_OFFICES = [
  {
    city: "New York",
    phone: "+1 (212) 555-1000",
    phoneHref: "tel:+12125551000",
    email: `ny@${SITE_DATA.contact.email.split("@")[1] ?? "lexfirmglobal.com"}`,
    address: "Madison Avenue, New York, NY 10065",
  },
  {
    city: "Chicago",
    phone: SITE_DATA.contact.phone,
    phoneHref: `tel:${SITE_DATA.contact.phone}`,
    email: SITE_DATA.contact.email,
    address: `${SITE_DATA.contact.address.street}, ${SITE_DATA.contact.address.city}`,
  },
] as const;
