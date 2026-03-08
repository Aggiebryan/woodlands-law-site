

# Plan: Add Intake Form Before Every Cal.com Scheduler

## Summary

Create a reusable intake form dialog that intercepts all Cal.com scheduling buttons across the site. When a user clicks any scheduling CTA, they first complete the intake form in a modal. On submission, the intake data is sent to the webhook, then the Cal.com scheduler opens (also in a dialog) with pre-filled fields.

## Affected Pages

1. **InsuranceLitigationPage** — Hero CTA + bottom CTA button (2 buttons)
2. **PersonalInjuryPage** — Hero CTA + bottom CTA button (2 buttons)
3. **AttorneyProfilePage** — Bryan Holman (iframe dialog) + Gwendolyn Simpson (Cal embed) buttons

## Technical Approach

### 1. Create `IntakeSchedulerDialog` component

A new reusable component (`src/components/schedule/IntakeSchedulerDialog.tsx`) that:

- Accepts props: `open`, `onOpenChange`, `calLink` (the Cal.com link), `calNamespace`
- Manages two internal states: `intakeComplete` and `intakeData`
- When `!intakeComplete`: renders the existing `IntakeForm` inside a full-screen `Dialog`
- When `intakeComplete`: shows the success banner + inline `Cal` embed (from `@calcom/embed-react`) inside the same dialog, pre-filled with intake data (name, email, notes)
- On close, resets state

### 2. Update Practice Area Pages

**InsuranceLitigationPage:**
- Remove `getCalApi` initialization and `data-cal-*` props from both buttons
- Add `IntakeSchedulerDialog` with `calLink="team/the-woodlands-law-firm/insurance-claim"` and `calNamespace="insurance-claim"`
- Wire both CTA buttons to open the dialog via `onClick`

**PersonalInjuryPage:**
- Same pattern — remove `data-cal-*` props from hero and bottom CTA
- Add `IntakeSchedulerDialog` with `calLink="team/the-woodlands-law-firm/personalinjury"` and `calNamespace="personalinjury"`
- Wire both buttons to open the dialog

### 3. Update Attorney Profile Page

**Bryan Holman:** Replace the iframe dialog with `IntakeSchedulerDialog` using `calLink="bryanholman"` and `calNamespace="bryan-holman"`

**Gwendolyn Simpson:** Replace `data-cal-*` button with `IntakeSchedulerDialog` using `calLink="gwensimpson"` and `calNamespace="gwendolyn-simpson"`

### 4. Files Changed

| File | Action |
|------|--------|
| `src/components/schedule/IntakeSchedulerDialog.tsx` | **Create** — reusable intake-then-schedule dialog |
| `src/pages/practice-areas/InsuranceLitigationPage.tsx` | **Edit** — use dialog instead of direct Cal |
| `src/pages/practice-areas/PersonalInjuryPage.tsx` | **Edit** — use dialog instead of direct Cal |
| `src/pages/AttorneyProfilePage.tsx` | **Edit** — use dialog for both attorneys |

### Component Structure

```text
IntakeSchedulerDialog (Dialog)
├── State: intakeComplete=false
│   └── IntakeForm (existing component)
│       └── onSubmitSuccess → POST webhook, set intakeComplete=true
└── State: intakeComplete=true
    ├── Success Banner (check icon, contact info)
    └── Cal embed (pre-filled with intake data)
```

The existing `IntakeForm` component is reused as-is. The `SchedulePage` remains unchanged.

