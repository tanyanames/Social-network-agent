import { ADAMA_BRAND_PROFILE } from "./adama-profile.mjs";
import { CBA_YOUNG_BRAND_PROFILE } from "./cba-young-profile.mjs";

export const SOCIAL_ACCOUNTS = Object.freeze({
  adama: Object.freeze({
    id: "adama",
    displayName: "ADAMA",
    brand: ADAMA_BRAND_PROFILE,
  }),
  "cba-young": Object.freeze({
    id: "cba-young",
    displayName: "CBA Young",
    brand: CBA_YOUNG_BRAND_PROFILE,
  }),
});

export function getSocialAccount(accountId) {
  const account = SOCIAL_ACCOUNTS[accountId];
  if (!account) throw new Error(`Unknown social account: ${accountId}`);
  return account;
}
