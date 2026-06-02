# LuCE Questions Gatherer

A multilingual question collection website for **Lung Cancer Europe (LuCE)**. Patients, caregivers, and healthcare professionals can submit questions that will inform the development of the **LuCE Chatbot** — an AI information assistant for lung cancer patients.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your keys (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Create `.env.local` in the project root:

```
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

---

## Setting up Notion

### 1. Create a Notion integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **+ New integration**
3. Name it (e.g. "LuCE Questions Gatherer"), select your workspace
4. Set **Capabilities** → Content Capabilities → **Insert content** ✓
5. Click **Save**, then copy the **Internal Integration Token** — this is your `NOTION_TOKEN`

### 2. Create the database

1. In Notion, create a new **full-page database** (not inline)
2. Name it e.g. "LuCE Questions"
3. Add the following columns with the exact names and types listed:

| Column name | Notion type | Notes |
|---|---|---|
| Question (original) | **Title** | Default "Name" column — rename it |
| Role | Select | |
| Role (custom) | Text | |
| Country | Select | |
| Preferred language | Select | |
| UI language | Select | |
| Name | Text | |
| Email | Email | |
| Mailing list opt-in | Checkbox | |
| Submitted at | Date | |
| Submission ID | Text | |

> **Tip:** Select columns populate automatically from submitted data — you don't need to pre-fill any options.

### 3. Connect the database to your integration

1. Open your database page in Notion
2. Click **…** (top right) → **+ Add connections**
3. Search for and select your integration
4. Click **Confirm**

### 4. Get the database ID

The database ID is the part of the URL after the workspace slug and before the `?`:

```
https://www.notion.so/myworkspace/THIS-IS-THE-ID?v=...
```

Copy it (32 hex characters, hyphens optional) and set it as `NOTION_DATABASE_ID`.

---

## Translations

UI translations are stored as static JSON files in `public/locales/{lang}/common.json`. The English base file is at `public/locales/en/common.json`.

To scaffold the other language files (copies of the English file as a starting point):

```bash
node scripts/generate-translations.js
```

Then edit each language file manually to add proper translations.

---

## Deployment (Vercel)

1. Push the repo to GitHub
2. Import it in [vercel.com](https://vercel.com) — the free tier is sufficient
3. In the Vercel project settings → **Environment Variables**, add:
   - `NOTION_TOKEN`
   - `NOTION_DATABASE_ID`
4. Deploy

---

## Project structure

```
/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout with i18n provider
│   ├── globals.css
│   └── api/submit/route.ts   # Submission API route
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── HowItWorks.tsx
│   ├── SubmissionForm.tsx
│   ├── PrivacyNotice.tsx
│   ├── QuestionInput.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Footer.tsx
│   └── I18nProvider.tsx
├── public/locales/
│   ├── en/common.json        # Source strings
│   └── {de,fr,it,es,nl,pl,sv}/common.json
├── scripts/
│   └── generate-translations.js
├── lib/
│   ├── i18n.ts               # i18next config
│   └── notion.ts             # Notion client
├── .env.example
└── README.md
```

---

## Languages supported

English · German · French · Italian · Spanish · Dutch · Polish · Swedish

The site auto-detects the visitor's browser language and falls back to English. Language preference is persisted in `localStorage`.
