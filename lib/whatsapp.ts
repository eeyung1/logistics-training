/**
 * WhatsApp payment & order-routing config — SERVER ONLY.
 *
 * Reads the business number from the private env var `WHATSAPP_NUMBER`
 * (no NEXT_PUBLIC_ prefix) and hands it to the client payment form as a prop.
 */

import { phoneIntl } from "./site";

export type WhatsappConfig = {
  /** Business WhatsApp number, international format, digits only, no "+". */
  number: string;
  /** True once a real number is provided via WHATSAPP_NUMBER or defaults. */
  configured: boolean;
};

export function getWhatsappConfig(): WhatsappConfig {
  const raw = process.env.WHATSAPP_NUMBER?.trim() ?? "";
  const configured = /^\d+$/.test(raw);
  return {
    number: configured ? raw : phoneIntl,
    configured: true,
  };
}
