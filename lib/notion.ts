import { Client } from "@notionhq/client";

let _client: Client | null = null;

function getClient(): Client {
  if (!_client) {
    const token = process.env.NOTION_TOKEN;
    if (!token) throw new Error("NOTION_TOKEN is not set");
    _client = new Client({ auth: token });
  }
  return _client;
}

export interface QuestionRowData {
  questionOriginal: string;
  role: string;
  roleCustom: string;
  country: string;
  preferredLanguage: string;
  uiLanguage: string;
  firstName: string;
  lastName: string;
  anythingElse: string;
  email: string;
  mailingListOptIn: boolean;
  submittedAt: string;
  submissionId: string;
}

export async function createQuestionRow(data: QuestionRowData): Promise<void> {
  const notion = getClient();
  const dbId = process.env.NOTION_DATABASE_ID;
  if (!dbId) throw new Error("NOTION_DATABASE_ID is not set");

  const properties: Record<string, unknown> = {
    "Question (original)": {
      title: [{ text: { content: data.questionOriginal } }],
    },
    "Submission ID": {
      rich_text: [{ text: { content: data.submissionId } }],
    },
    "Submitted at": {
      date: { start: data.submittedAt },
    },
    "Mailing list opt-in": {
      checkbox: data.mailingListOptIn,
    },
  };

  if (data.role) {
    properties["Role"] = { select: { name: data.role } };
  }
  if (data.country) {
    properties["Country"] = { select: { name: data.country } };
  }
  if (data.preferredLanguage) {
    properties["Preferred language"] = { select: { name: data.preferredLanguage } };
  }
  if (data.uiLanguage) {
    properties["UI language"] = { select: { name: data.uiLanguage } };
  }
  if (data.roleCustom) {
    properties["Role (custom)"] = {
      rich_text: [{ text: { content: data.roleCustom } }],
    };
  }
  if (data.firstName) {
    properties["First name"] = {
      rich_text: [{ text: { content: data.firstName } }],
    };
  }
  if (data.lastName) {
    properties["Last name"] = {
      rich_text: [{ text: { content: data.lastName } }],
    };
  }
  if (data.email) {
    properties["Email"] = { email: data.email };
  }
  if (data.anythingElse) {
    properties["Anything else"] = {
      rich_text: [{ text: { content: data.anythingElse } }],
    };
  }

  await notion.pages.create({
    parent: { database_id: dbId },
    properties: properties as any,
  });
}
