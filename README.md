# Delivery Coordination Business Training — High-Converting Sales Funnel

A direct-response marketing funnel for **Solution Virtues Logistics' Delivery Coordination Business Training**, hosted by **Chinedu Aniakor**. 

The funnel is built as a complete two-step conversion engine tailored for the Nigerian market:
1. **Free Training Landing Page (`/`):** Where ads drive traffic to watch the 90-minute recorded masterclass, understand the business model, examine social proof, and click the bold CTA button directly below the video.
2. **Main Course Sales Page (`/course`):** The comprehensive course landing page breaking down the opportunity gap, 14-module syllabus, bonus stack worth ₦310k, affiliate refund hack, 40% discount offer (₦30,000 today instead of ₦50,000), and direct bank payment form with instant WhatsApp proof submission for admission into the VIP group community.

> 🛒 **Currency:** Nigerian Naira (₦). Payment verification via bank transfer and direct WhatsApp group admission.
>
> 🌐 **Live Demo:** [https://logistics-training-six.vercel.app](https://logistics-training-six.vercel.app/)

---

## Funnel Architecture

```text
       [ Paid Ads Traffic ]
                 │
                 ▼
┌─────────────────────────────────┐
│   FREE TRAINING PAGE (/)        │
│                                 │
│  • High-converting Hero         │
│  • Problem: The Gap in Middle   │
│  • 90-Min YouTube Masterclass   │
│  • [BOLD BUTTON UNDER VIDEO]    │
│  • What You'll Learn Highlights │
│  • About Host: Chinedu Aniakor  │
│  • Social Proof & Testimonials  │
└────────────────┬────────────────┘
                 │ (Clicks Bold Button)
                 ▼
┌─────────────────────────────────┐
│   MAIN COURSE PAGE (/course)    │
│                                 │
│  • Transition: The Opportunity  │
│  • 14 Complete Training Modules │
│  • 8 High-Value Bonuses (₦310k) │
│  • Slide 18: Affiliate Hack     │
│  • 40% OFF Offer: ₦30,000 Today │
│  • 2 Choices Decision Close     │
│  • Bank Transfer + WhatsApp Form│
│  • FAQ & Objections Handled     │
└────────────────┬────────────────┘
                 │ (Submits Form)
                 ▼
┌─────────────────────────────────┐
│    WHATSAPP GROUP ADMISSION     │
│                                 │
│  • Pre-filled payment receipt   │
│    relayed directly to Chinedu  │
│  • Chinedu confirms payment     │
│  • Student admitted into group  │
└─────────────────────────────────┘
```

---

## Tech Stack

- **[Next.js](https://nextjs.org)** (App Router, Next 15) — React framework
- **React 19** — UI
- **TypeScript** — Type safety
- **Vanilla CSS Design Token System** (`app/globals.css`) — Lightweight, ultra-fast loading, zero heavy CSS libraries
- **Vercel** — One-click production deployment

---

## Getting Started

### Prerequisites

- Node.js **18.18** or later
- npm (or pnpm/yarn)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the WhatsApp number & Bank Details

```bash
cp .env.example .env.local
```

Configure `WHATSAPP_NUMBER` in `.env.local` (international format, digits only, e.g. `2348086228640`).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the Free Training page, and [http://localhost:3000/course](http://localhost:3000/course) for the Main Course page.

### 4. Production build & type check

```bash
npm run build
npm run start
npx tsc --noEmit
```

---

## Single Source of Truth (`lib/site.ts`)

All marketing copy, pricing, bank details, module curriculums, bonuses, and host biographies are centralized in [`lib/site.ts`](./lib/site.ts):

| What | Where in `lib/site.ts` |
| --- | --- |
| Host Details & Bio | `host` |
| Video ID & Embed | `videoConfig` |
| Course Pricing & Discount | `coursePricing` |
| 14 Course Modules | `courseModules` |
| Bonuses & Valuations | `courseBonuses` |
| Bank Account for Transfers | `bankPaymentDetails` |
| Phone Number Display | `phoneDisplay`, `phoneIntl` |
| Testimonials | `socialProof` |

---

## Payment & WhatsApp Group Admission Workflow

As specified: *"They will make payments there then it will give them access to the WhatsApp group community. It's payments I will see before they are admitted into the group."*

1. **Buyer details:** The buyer enters their Full Name, WhatsApp Number, Email, and City/State on `/course#enroll`.
2. **Transfer details:** The page displays the official Bank Name, Account Number (with 1-click copy), Account Name, and amount (₦30,000).
3. **Receipt relay:** Clicking **"I Have Paid — Send Proof & Join Group"** opens WhatsApp directly to the instructor with a pre-filled receipt template containing their name, phone, email, and amount.
4. **Verification & Admission:** The instructor confirms the bank alert and replies with the direct invitation link to the private VIP WhatsApp Community Group.

---

## License

All rights reserved © Solution Virtues Logistics.
