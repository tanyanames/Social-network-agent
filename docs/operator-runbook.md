# ADAMA shadow-mode runbook

## Generate a weekly batch

```powershell
npm run batch -- weekly 2026-07-26
```

Drafts persist locally in `Context/runtime-state/items.json`.

## Review and approve

```powershell
npm run dev
```

Open `http://localhost:3000`. Approval is a content decision only; it does not
publish externally. Review each channel separately:

1. Edit the caption, CTA, or design brief and save it.
2. Approve Instagram, Facebook, and Telegram independently.
3. A package becomes approved only after every selected channel is approved.
4. Requesting revision on any channel returns the package to the revision loop;
   use **Regenerate after feedback** to bring it back for review.

Schedule the fully approved package through:

```http
POST /api/items/{id}/schedule
Content-Type: application/json

{"date":"2026-07-27T17:00:00+03:00"}
```

The resulting queue contains Instagram, Facebook, and Telegram entries marked
`shadow_scheduled`, with `externalCallMade: false`.

## Safety

Never put platform tokens in the repository. Live adapters remain disabled until
the P1 checklist and shadow-mode exit criteria are complete.
